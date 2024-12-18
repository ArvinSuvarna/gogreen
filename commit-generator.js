const moment = require('moment');
const Chance = require('chance');
const config = require('./config');

const chance = new Chance();

class CommitGenerator {
  constructor() {
    this.activeDays = new Set();
    this.vacationDays = new Set();
    this.clusterDays = new Set();
    this.initializeVacations();
  }

  initializeVacations() {
    config.vacationPeriods.forEach(period => {
      const start = moment(period.start);
      const end = moment(period.end);
      let current = start.clone();
      
      while (current.isSameOrBefore(end)) {
        this.vacationDays.add(current.format('YYYY-MM-DD'));
        current.add(1, 'day');
      }
    });
  }

  // Generate human-like commit time based on work hours distribution
  generateCommitTime(date) {
    const hourRanges = [
      { ...config.workHours.morning, hours: [] },
      { ...config.workHours.afternoon, hours: [] },
      { ...config.workHours.evening, hours: [] }
    ];

    // Generate hours based on weights
    hourRanges.forEach(range => {
      for (let i = range.start; i < range.end; i++) {
        const count = Math.round(range.weight * 10);
        for (let j = 0; j < count; j++) {
          range.hours.push(i);
        }
      }
    });

    // Flatten all hours
    const allHours = hourRanges.flatMap(range => range.hours);
    const hour = chance.pickone(allHours);
    const minute = chance.integer({ min: 0, max: 59 });
    const second = chance.integer({ min: 0, max: 59 });

    return moment(date).hour(hour).minute(minute).second(second);
  }

  // Check if date is weekend
  isWeekend(date) {
    const day = moment(date).day();
    return day === 0 || day === 6; // Sunday or Saturday
  }

  // Check if date is vacation
  isVacation(date) {
    return this.vacationDays.has(moment(date).format('YYYY-MM-DD'));
  }

  // Get activity level for a specific year
  getActivityLevel(year) {
    return config.activityLevels[year] || 0.5;
  }

  // Generate commit count for a day
  getCommitCount(date, isWeekendDay) {
    if (this.isVacation(date)) {
      return 0;
    }

    // Base distribution
    const distribution = config.commitFrequency.distribution;
    const weights = Object.keys(distribution).map(key => distribution[key]);
    const counts = Object.keys(distribution).map(Number);
    const baseCount = chance.weighted(counts, weights);

    // Adjust for weekend
    if (isWeekendDay) {
      const weekendCount = Math.max(1, Math.floor(baseCount * config.weekendActivityMultiplier));
      return chance.bool({ likelihood: 60 }) ? weekendCount : 0; // 40% chance of no weekend commits
    }

    // Adjust for activity level
    const year = moment(date).year();
    const activityLevel = this.getActivityLevel(year);
    const adjustedCount = Math.max(1, Math.round(baseCount * activityLevel));

    return adjustedCount;
  }

  // Generate random gaps (sick days, etc.)
  generateRandomGaps(startDate, endDate) {
    const gaps = new Set();
    const start = moment(startDate);
    const end = moment(endDate);
    let current = start.clone();

    while (current.isBefore(end)) {
      const year = current.year();
      const month = current.month();
      
      // Generate 1-2 gaps per month
      const gapsThisMonth = chance.integer({ 
        min: config.randomGaps.daysPerMonth.min, 
        max: config.randomGaps.daysPerMonth.max 
      });

      for (let i = 0; i < gapsThisMonth; i++) {
        const gapDay = chance.integer({ min: 1, max: current.daysInMonth() });
        const gapDate = moment(current).date(gapDay);
        
        // Don't add gaps on weekends or vacations
        if (!this.isWeekend(gapDate) && !this.isVacation(gapDate)) {
          gaps.add(gapDate.format('YYYY-MM-DD'));
        }
      }

      current.add(1, 'month');
    }

    return gaps;
  }

  // Generate commit clustering (bursts of activity)
  generateClusters(startDate, endDate) {
    if (!config.clustering.enabled) {
      return new Set();
    }

    const clusters = new Set();
    const start = moment(startDate);
    const end = moment(endDate);
    let current = start.clone();

    while (current.isBefore(end)) {
      // 40% chance of starting a cluster
      if (chance.bool({ likelihood: config.clustering.probability * 100 })) {
        const burstLength = chance.integer(config.clustering.burstLength);
        
        for (let i = 0; i < burstLength; i++) {
          const clusterDate = current.clone().add(i, 'days');
          
          // Don't cluster on weekends or vacations
          if (!this.isWeekend(clusterDate) && !this.isVacation(clusterDate)) {
            clusters.add(clusterDate.format('YYYY-MM-DD'));
          }
        }
      }

      // Move forward by burst length to avoid overlapping
      current.add(chance.integer({ min: 3, max: 7 }), 'days');
    }

    return clusters;
  }

  // Generate schedule of all commit dates and times
  generateSchedule() {
    const schedule = [];
    const start = moment(config.startDate);
    const end = moment(config.endDate);
    let current = start.clone();

    // Generate random gaps
    const randomGaps = this.generateRandomGaps(start, end);
    
    // Generate clusters
    const clusters = this.generateClusters(start, end);

    while (current.isBefore(end)) {
      const dateStr = current.format('YYYY-MM-DD');
      const isWeekendDay = this.isWeekend(current);
      
      // Skip if vacation
      if (this.isVacation(current)) {
        current.add(1, 'day');
        continue;
      }

      // Skip if random gap (but allow clusters)
      if (randomGaps.has(dateStr) && !clusters.has(dateStr)) {
        current.add(1, 'day');
        continue;
      }

      // Get commit count for this day
      let commitCount = this.getCommitCount(current, isWeekendDay);

      // Boost commit count if in cluster
      if (clusters.has(dateStr)) {
        commitCount = Math.min(commitCount + chance.integer({ min: 2, max: 5 }), config.commitFrequency.max);
      }

      // Generate commit times for this day
      const commitTimes = [];
      for (let i = 0; i < commitCount; i++) {
        const commitTime = this.generateCommitTime(current);
        commitTimes.push(commitTime);
      }

      // Sort times chronologically
      commitTimes.sort((a, b) => a.valueOf() - b.valueOf());

      // Add to schedule
      commitTimes.forEach(time => {
        schedule.push({
          date: time.clone(),
          timestamp: time.valueOf()
        });
      });

      current.add(1, 'day');
    }

    // Sort entire schedule by timestamp
    schedule.sort((a, b) => a.timestamp - b.timestamp);

    return schedule;
  }

  // Get statistics about the schedule
  getStatistics(schedule) {
    const stats = {
      total: schedule.length,
      byYear: {},
      byMonth: {},
      byDayOfWeek: {},
      byHour: {}
    };

    schedule.forEach(item => {
      const date = item.date;
      const year = date.year();
      const month = date.format('YYYY-MM');
      const dayOfWeek = date.format('dddd');
      const hour = date.hour();

      stats.byYear[year] = (stats.byYear[year] || 0) + 1;
      stats.byMonth[month] = (stats.byMonth[month] || 0) + 1;
      stats.byDayOfWeek[dayOfWeek] = (stats.byDayOfWeek[dayOfWeek] || 0) + 1;
      stats.byHour[hour] = (stats.byHour[hour] || 0) + 1;
    });

    return stats;
  }
}

module.exports = CommitGenerator;


