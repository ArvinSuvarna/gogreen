interface AdiProps {
  name: string;
  onChange?: () => void;
}

export const Adi: React.FC<AdiProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Adi</h2>
    </div>
  );
};