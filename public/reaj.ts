interface ReajProps {
  title: string;
  onClick?: () => void;
}

export const Reaj: React.FC<ReajProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Reaj</h2>
    </div>
  );
};