interface SudtenewProps {
  id: string;
  onClick?: () => void;
}

export const Sudtenew: React.FC<SudtenewProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Sudtenew</h2>
    </div>
  );
};