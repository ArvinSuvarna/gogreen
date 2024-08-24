interface ComponentProps {
  name: number;
  onClick?: () => void;
}

export const Component: React.FC<ComponentProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Component</h2>
    </div>
  );
};