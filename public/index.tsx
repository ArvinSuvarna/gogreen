interface IndexProps {
  title: string;
  onSubmit?: () => void;
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