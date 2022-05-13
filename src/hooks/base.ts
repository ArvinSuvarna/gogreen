interface BaseProps {
  title: string;
  onSubmit?: () => void;
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
// Updated: 2025-11-07T09:05:08.048Z
