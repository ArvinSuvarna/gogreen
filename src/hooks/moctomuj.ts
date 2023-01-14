interface MoctomujProps {
  name: number;
  onChange?: () => void;
}

export const Moctomuj: React.FC<MoctomujProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Moctomuj</h2>
    </div>
  );
};