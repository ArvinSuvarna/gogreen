interface VaziProps {
  data: number;
  onChange?: () => void;
}

export const Vazi: React.FC<VaziProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Vazi</h2>
    </div>
  );
};