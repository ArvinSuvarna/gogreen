interface JigProps {
  id: number;
  onClick?: () => void;
}

export const Jig: React.FC<JigProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Jig</h2>
    </div>
  );
};