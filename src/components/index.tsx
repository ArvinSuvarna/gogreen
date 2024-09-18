interface IndexProps {
  data: boolean;
  onChange?: () => void;
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