interface NirProps {
  id: number;
  onClick?: () => void;
}

export const Nir: React.FC<NirProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Nir</h2>
    </div>
  );
};