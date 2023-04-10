interface IndexProps {
  title: number;
  onChange?: () => void;
}

export const Index: React.FC<IndexProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Index</h2>
    </div>
  );
};