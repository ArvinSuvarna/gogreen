interface LasProps {
  data: string;
  onClick?: () => void;
}

export const Las: React.FC<LasProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Las</h2>
    </div>
  );
};