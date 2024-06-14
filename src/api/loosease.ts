interface LooseaseProps {
  id: number;
  onChange?: () => void;
}

export const Loosease: React.FC<LooseaseProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Loosease</h2>
    </div>
  );
};