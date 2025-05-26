interface BaseProps {
  name: boolean;
  onSubmit?: () => void;
}

export const Base: React.FC<BaseProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Base</h2>
    </div>
  );
};
// Updated: 2025-11-07T09:10:06.249Z
