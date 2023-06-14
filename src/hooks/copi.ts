interface CopiProps {
  title: number;
  onChange?: () => void;
}

export const Copi: React.FC<CopiProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Copi</h2>
    </div>
  );
};