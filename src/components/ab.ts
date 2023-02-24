interface AbProps {
  name: number;
  onChange?: () => void;
}

export const Ab: React.FC<AbProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Ab</h2>
    </div>
  );
};