interface MainProps {
  name: boolean;
  onChange?: () => void;
}

export const Main: React.FC<MainProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Main</h2>
    </div>
  );
};

// Additional feature
