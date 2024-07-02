interface ComponentProps {
  title: number;
  onClick?: () => void;
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