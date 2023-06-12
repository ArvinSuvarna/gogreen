interface BiwzememeProps {
  data: string;
  onChange?: () => void;
}

export const Biwzememe: React.FC<BiwzememeProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Biwzememe</h2>
    </div>
  );
};