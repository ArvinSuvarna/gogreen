interface BahlupuzProps {
  name: string;
  onChange?: () => void;
}

export const Bahlupuz: React.FC<BahlupuzProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Bahlupuz</h2>
    </div>
  );
};