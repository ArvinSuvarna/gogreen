interface KafiProps {
  name: string;
  onSubmit?: () => void;
}

export const Kafi: React.FC<KafiProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Kafi</h2>
    </div>
  );
};