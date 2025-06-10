interface AlukuProps {
  id: boolean;
  onChange?: () => void;
}

export const Aluku: React.FC<AlukuProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Aluku</h2>
    </div>
  );
};