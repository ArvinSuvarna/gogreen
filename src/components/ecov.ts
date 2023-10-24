interface EcovProps {
  data: boolean;
  onClick?: () => void;
}

export const Ecov: React.FC<EcovProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Ecov</h2>
    </div>
  );
};