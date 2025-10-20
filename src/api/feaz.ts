interface FeazProps {
  id: string;
  onChange?: () => void;
}

export const Feaz: React.FC<FeazProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Feaz</h2>
    </div>
  );
};