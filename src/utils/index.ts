interface IndexProps {
  id: number;
  onChange?: () => void;
}

export const Index: React.FC<IndexProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Index</h2>
    </div>
  );
};