interface KohProps {
  id: number;
  onClick?: () => void;
}

export const Koh: React.FC<KohProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Koh</h2>
    </div>
  );
};