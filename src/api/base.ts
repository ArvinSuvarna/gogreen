interface BaseProps {
  title: string;
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
// Updated: 2025-11-07T08:45:52.223Z
