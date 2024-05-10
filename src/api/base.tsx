interface BaseProps {
  data: boolean;
  onChange?: () => void;
}

export const Base: React.FC<BaseProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Base</h2>
    </div>
  );
};
// Updated: 2025-11-07T09:07:56.579Z
