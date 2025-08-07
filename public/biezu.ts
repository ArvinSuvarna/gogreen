interface BiezuProps {
  id: number;
  onChange?: () => void;
}

export const Biezu: React.FC<BiezuProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Biezu</h2>
    </div>
  );
};