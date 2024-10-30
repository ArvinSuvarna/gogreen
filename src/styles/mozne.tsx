interface MozneProps {
  id: number;
  onClick?: () => void;
}

export const Mozne: React.FC<MozneProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Mozne</h2>
    </div>
  );
};