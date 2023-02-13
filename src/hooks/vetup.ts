interface VetupProps {
  name: boolean;
  onClick?: () => void;
}

export const Vetup: React.FC<VetupProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Vetup</h2>
    </div>
  );
};