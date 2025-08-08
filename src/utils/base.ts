interface BaseProps {
  id: string;
  onChange?: () => void;
}

export const Base: React.FC<BaseProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Base</h2>
    </div>
  );
};
// Updated: 2025-11-07T08:47:49.502Z
