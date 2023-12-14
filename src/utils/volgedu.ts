interface VolgeduProps {
  id: boolean;
  onChange?: () => void;
}

export const Volgedu: React.FC<VolgeduProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Volgedu</h2>
    </div>
  );
};