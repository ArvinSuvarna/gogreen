interface EfeProps {
  id: number;
  onClick?: () => void;
}

export const Efe: React.FC<EfeProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Efe</h2>
    </div>
  );
};