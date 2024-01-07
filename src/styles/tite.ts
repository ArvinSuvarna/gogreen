interface TiteProps {
  id: number;
  onClick?: () => void;
}

export const Tite: React.FC<TiteProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Tite</h2>
    </div>
  );
};