interface GoduProps {
  name: boolean;
  onChange?: () => void;
}

export const Godu: React.FC<GoduProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Godu</h2>
    </div>
  );
};