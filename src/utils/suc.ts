interface SucProps {
  data: number;
  onClick?: () => void;
}

export const Suc: React.FC<SucProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Suc</h2>
    </div>
  );
};