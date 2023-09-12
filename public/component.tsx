interface ComponentProps {
  id: string;
  onSubmit?: () => void;
}

export const Component: React.FC<ComponentProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Component</h2>
    </div>
  );
};