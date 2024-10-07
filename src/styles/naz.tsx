interface NazProps {
  title: boolean;
  onChange?: () => void;
}

export const Naz: React.FC<NazProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Naz</h2>
    </div>
  );
};