interface VitProps {
  title: number;
  onClick?: () => void;
}

export const Vit: React.FC<VitProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Vit</h2>
    </div>
  );
};