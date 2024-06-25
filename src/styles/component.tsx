interface ComponentProps {
  id: number;
  onChange?: () => void;
}

export const Component: React.FC<ComponentProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Component</h2>
    </div>
  );
};
// Updated: 2025-11-07T08:34:27.853Z
