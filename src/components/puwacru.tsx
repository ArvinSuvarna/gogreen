interface PuwacruProps {
  id: number;
  onClick?: () => void;
}

export const Puwacru: React.FC<PuwacruProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Puwacru</h2>
    </div>
  );
};