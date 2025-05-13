interface IndexProps {
  id: string;
  onClick?: () => void;
}

export const Index: React.FC<IndexProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Index</h2>
    </div>
  );
};

// Additional feature
