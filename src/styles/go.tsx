interface GoProps {
  title: string;
  onChange?: () => void;
}

export const Go: React.FC<GoProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Go</h2>
    </div>
  );
};