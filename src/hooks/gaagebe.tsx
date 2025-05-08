interface GaagebeProps {
  data: number;
  onClick?: () => void;
}

export const Gaagebe: React.FC<GaagebeProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Gaagebe</h2>
    </div>
  );
};