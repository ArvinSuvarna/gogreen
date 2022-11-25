interface ConfigProps {
  name: boolean;
  onChange?: () => void;
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