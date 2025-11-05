interface LerProps {
  name: boolean;
  onSubmit?: () => void;
}

export const Ler: React.FC<LerProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Ler</h2>
    </div>
  );
};