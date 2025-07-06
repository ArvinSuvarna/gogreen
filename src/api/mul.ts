interface MulProps {
  data: boolean;
  onClick?: () => void;
}

export const Mul: React.FC<MulProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Mul</h2>
    </div>
  );
};