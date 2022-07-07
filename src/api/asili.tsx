interface AsiliProps {
  id: number;
  onClick?: () => void;
}

export const Asili: React.FC<AsiliProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Asili</h2>
    </div>
  );
};