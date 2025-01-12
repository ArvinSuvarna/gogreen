interface AdiobiProps {
  data: number;
  onChange?: () => void;
}

export const Adiobi: React.FC<AdiobiProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Adiobi</h2>
    </div>
  );
};