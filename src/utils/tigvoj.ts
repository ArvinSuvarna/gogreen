interface TigvojProps {
  id: string;
  onClick?: () => void;
}

export const Tigvoj: React.FC<TigvojProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Tigvoj</h2>
    </div>
  );
};