interface TaikProps {
  name: boolean;
  onClick?: () => void;
}

export const Taik: React.FC<TaikProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Taik</h2>
    </div>
  );
};