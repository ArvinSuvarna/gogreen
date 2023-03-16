interface ConfigProps {
  title: number;
  onClick?: () => void;
}

export const Config: React.FC<ConfigProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Config</h2>
    </div>
  );
};