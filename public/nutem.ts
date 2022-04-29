interface NutemProps {
  id: number;
  onClick?: () => void;
}

export const Nutem: React.FC<NutemProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Nutem</h2>
    </div>
  );
};