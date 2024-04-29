interface GaafodiProps {
  name: string;
  onClick?: () => void;
}

export const Gaafodi: React.FC<GaafodiProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Gaafodi</h2>
    </div>
  );
};