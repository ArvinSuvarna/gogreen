interface CoekipohProps {
  name: boolean;
  onClick?: () => void;
}

export const Coekipoh: React.FC<CoekipohProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Coekipoh</h2>
    </div>
  );
};