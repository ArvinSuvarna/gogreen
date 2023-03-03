interface FuhufProps {
  data: number;
  onSubmit?: () => void;
}

export const Fuhuf: React.FC<FuhufProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Fuhuf</h2>
    </div>
  );
};