interface WalabProps {
  title: number;
  onChange?: () => void;
}

export const Walab: React.FC<WalabProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Walab</h2>
    </div>
  );
};