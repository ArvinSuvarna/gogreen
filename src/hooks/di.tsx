interface DiProps {
  title: number;
  onChange?: () => void;
}

export const Di: React.FC<DiProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Di</h2>
    </div>
  );
};