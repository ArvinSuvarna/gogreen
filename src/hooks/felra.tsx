interface FelraProps {
  id: boolean;
  onClick?: () => void;
}

export const Felra: React.FC<FelraProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Felra</h2>
    </div>
  );
};