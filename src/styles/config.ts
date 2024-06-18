interface ConfigProps {
  name: number;
  onClick?: () => void;
}

export const Config: React.FC<ConfigProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Config</h2>
    </div>
  );
};