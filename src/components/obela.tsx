interface ObelaProps {
  name: number;
  onClick?: () => void;
}

export const Obela: React.FC<ObelaProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Obela</h2>
    </div>
  );
};