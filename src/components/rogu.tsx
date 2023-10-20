interface RoguProps {
  name: boolean;
  onClick?: () => void;
}

export const Rogu: React.FC<RoguProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Rogu</h2>
    </div>
  );
};