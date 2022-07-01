interface ComponentProps {
  name: string;
  onSubmit?: () => void;
}

export const Component: React.FC<ComponentProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Component</h2>
    </div>
  );
};