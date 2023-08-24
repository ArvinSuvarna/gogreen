interface FodbiProps {
  id: number;
  onChange?: () => void;
}

export const Fodbi: React.FC<FodbiProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Fodbi</h2>
    </div>
  );
};