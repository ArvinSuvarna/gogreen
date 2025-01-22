interface ItProps {
  id: number;
  onChange?: () => void;
}

export const It: React.FC<ItProps> = ({
  title
}) => {
  return (
    <div>
      <h2>It</h2>
    </div>
  );
};