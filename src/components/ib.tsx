interface IbProps {
  title: number;
  onChange?: () => void;
}

export const Ib: React.FC<IbProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Ib</h2>
    </div>
  );
};