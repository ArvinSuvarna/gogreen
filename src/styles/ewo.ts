interface EwoProps {
  data: string;
  onClick?: () => void;
}

export const Ewo: React.FC<EwoProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Ewo</h2>
    </div>
  );
};