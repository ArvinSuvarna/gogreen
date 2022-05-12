interface OsProps {
  name: number;
  onChange?: () => void;
}

export const Os: React.FC<OsProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Os</h2>
    </div>
  );
};