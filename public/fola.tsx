interface FolaProps {
  id: number;
  onClick?: () => void;
}

export const Fola: React.FC<FolaProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Fola</h2>
    </div>
  );
};