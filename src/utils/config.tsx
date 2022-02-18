interface ConfigProps {
  name: number;
  onChange?: () => void;
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