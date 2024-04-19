interface KoesaProps {
  title: boolean;
  onChange?: () => void;
}

export const Koesa: React.FC<KoesaProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Koesa</h2>
    </div>
  );
};