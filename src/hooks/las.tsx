interface LasProps {
  name: number;
  onClick?: () => void;
}

export const Las: React.FC<LasProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Las</h2>
    </div>
  );
};