interface IndexProps {
  title: boolean;
  onClick?: () => void;
}

export const Index: React.FC<IndexProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Index</h2>
    </div>
  );
};