interface BulProps {
  name: string;
  onClick?: () => void;
}

export const Bul: React.FC<BulProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Bul</h2>
    </div>
  );
};