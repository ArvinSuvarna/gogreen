interface DotpiProps {
  id: boolean;
  onClick?: () => void;
}

export const Dotpi: React.FC<DotpiProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Dotpi</h2>
    </div>
  );
};