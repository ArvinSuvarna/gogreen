interface ComponentProps {
  title: string;
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

// Additional feature
