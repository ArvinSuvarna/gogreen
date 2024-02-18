interface OlirProps {
  name: string;
  onChange?: () => void;
}

export const Olir: React.FC<OlirProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Olir</h2>
    </div>
  );
};