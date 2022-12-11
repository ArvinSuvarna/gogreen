interface CobetProps {
  id: number;
  onChange?: () => void;
}

export const Cobet: React.FC<CobetProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Cobet</h2>
    </div>
  );
};