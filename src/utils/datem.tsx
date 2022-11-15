interface DatemProps {
  id: boolean;
  onChange?: () => void;
}

export const Datem: React.FC<DatemProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Datem</h2>
    </div>
  );
};