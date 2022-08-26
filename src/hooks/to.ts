interface ToProps {
  id: string;
  onChange?: () => void;
}

export const To: React.FC<ToProps> = ({
  title
}) => {
  return (
    <div>
      <h2>To</h2>
    </div>
  );
};