interface OgcajProps {
  id: boolean;
  onClick?: () => void;
}

export const Ogcaj: React.FC<OgcajProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Ogcaj</h2>
    </div>
  );
};