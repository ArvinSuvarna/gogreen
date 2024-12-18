const moment = require('moment');

module.exports = {
  // Activity levels per year (relative multipliers)
  activityLevels: {
    2022: 0.20,  // Low activity - learning phase
    2023: 0.40,  // Medium activity - growing
    2024: 0.70,  // High activity - active
    2025: 1.00   // Very high activity - very active
  },

  // Base commit counts per month (will be multiplied by activity level)
  baseCommitsPerMonth: {
    weekday: 120,  // Average commits per month on weekdays
    weekend: 40    // Average commits per month on weekends
  },

  // Work hours distribution (9 AM - 11 PM)
  workHours: {
    morning: { start: 9, end: 12, weight: 0.15 },      // 9 AM - 12 PM
    afternoon: { start: 12, end: 18, weight: 0.55 },   // 12 PM - 6 PM (peak)
    evening: { start: 18, end: 23, weight: 0.30 }      // 6 PM - 11 PM
  },

  // Weekend activity multiplier (30% of weekday activity)
  weekendActivityMultiplier: 0.30,

  // Vacation periods (1-2 weeks per year, no commits)
  vacationPeriods: [
    { start: '2022-07-15', end: '2022-07-29' },  // Summer 2022
    { start: '2022-12-20', end: '2023-01-03' }, // Winter 2022-2023
    { start: '2023-07-10', end: '2023-07-24' }, // Summer 2023
    { start: '2023-12-22', end: '2024-01-05' }, // Winter 2023-2024
    { start: '2024-07-08', end: '2024-07-22' }, // Summer 2024
    { start: '2024-12-23', end: '2025-01-06' }, // Winter 2024-2025
  ],

  // Commit frequency distribution (commits per day)
  commitFrequency: {
    min: 1,
    max: 12,
    distribution: {
      1: 0.20,   // 20% of days have 1 commit
      2: 0.25,   // 25% have 2 commits
      3: 0.20,   // 20% have 3 commits
      4: 0.15,   // 15% have 4 commits
      5: 0.10,   // 10% have 5 commits
      6: 0.05,   // 5% have 6 commits
      7: 0.03,   // 3% have 7 commits
      8: 0.01,   // 1% have 8+ commits
      9: 0.005,
      10: 0.003,
      11: 0.001,
      12: 0.001
    }
  },

  // Commit clustering (40% of commits in 2-3 day bursts)
  clustering: {
    enabled: true,
    probability: 0.40,
    burstLength: { min: 2, max: 4 } // days
  },

  // Sick days / random gaps (1-2 days per month)
  randomGaps: {
    enabled: true,
    daysPerMonth: { min: 1, max: 2 }
  },

  // File types and templates
  fileTypes: {
    web: {
      extensions: ['.html', '.css', '.js', '.jsx', '.ts', '.tsx', '.json'],
      directories: ['src/components', 'src/utils', 'src/api', 'src/styles', 'public', 'src/hooks']
    },
    general: {
      extensions: ['.py', '.js', '.json', '.md', '.yml', '.yaml', '.txt'],
      directories: ['src', 'scripts', 'config', 'tests', 'docs', 'utils']
    }
  },

  // Date range
  startDate: '2022-01-01',
  endDate: moment().format('YYYY-MM-DD'), // Today

  // Project structure
  projectStructure: [
    'src',
    'src/components',
    'src/utils',
    'src/api',
    'src/styles',
    'src/hooks',
    'public',
    'tests',
    'docs',
    'config',
    'scripts'
  ]
};


