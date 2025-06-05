interface RouluProps {
  id: string;
  onChange?: () => void;
}

export const Roulu: React.FC<RouluProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Roulu</h2>
    </div>
  );
};