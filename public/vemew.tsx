interface VemewProps {
  name: string;
  onClick?: () => void;
}

export const Vemew: React.FC<VemewProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Vemew</h2>
    </div>
  );
};