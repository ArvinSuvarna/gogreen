interface DiProps {
  title: boolean;
  onChange?: () => void;
}

export const Di: React.FC<DiProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Di</h2>
    </div>
  );
};