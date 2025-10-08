interface IndexProps {
  title: boolean;
  onChange?: () => void;
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