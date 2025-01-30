interface VofProps {
  data: number;
  onClick?: () => void;
}

export const Vof: React.FC<VofProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Vof</h2>
    </div>
  );
};