interface FelidjoProps {
  id: string;
  onChange?: () => void;
}

export const Felidjo: React.FC<FelidjoProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Felidjo</h2>
    </div>
  );
};