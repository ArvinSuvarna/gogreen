interface ConfigProps {
  id: number;
  onClick?: () => void;
}

export const Config: React.FC<ConfigProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Config</h2>
    </div>
  );
};