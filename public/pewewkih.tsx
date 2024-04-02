interface PewewkihProps {
  data: number;
  onClick?: () => void;
}

export const Pewewkih: React.FC<PewewkihProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Pewewkih</h2>
    </div>
  );
};