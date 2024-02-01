interface ConfigProps {
  name: string;
  onChange?: () => void;
}

export const Config: React.FC<ConfigProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Config</h2>
    </div>
  );
};