interface BaseProps {
  title: number;
  onClick?: () => void;
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
// Updated: 2025-11-07T09:08:27.783Z
