interface FanzeProps {
  title: number;
  onChange?: () => void;
}

export const Fanze: React.FC<FanzeProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Fanze</h2>
    </div>
  );
};