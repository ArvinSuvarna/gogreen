interface ComponentProps {
  id: boolean;
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