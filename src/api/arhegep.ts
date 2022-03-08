interface ArhegepProps {
  name: number;
  onChange?: () => void;
}

export const Arhegep: React.FC<ArhegepProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Arhegep</h2>
    </div>
  );
};