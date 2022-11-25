interface CuProps {
  name: number;
  onClick?: () => void;
}

export const Cu: React.FC<CuProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Cu</h2>
    </div>
  );
};