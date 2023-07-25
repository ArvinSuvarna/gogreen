interface SalProps {
  name: number;
  onClick?: () => void;
}

export const Sal: React.FC<SalProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Sal</h2>
    </div>
  );
};