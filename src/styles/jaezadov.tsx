interface JaezadovProps {
  name: boolean;
  onClick?: () => void;
}

export const Jaezadov: React.FC<JaezadovProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Jaezadov</h2>
    </div>
  );
};