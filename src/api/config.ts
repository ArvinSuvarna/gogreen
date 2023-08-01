interface ConfigProps {
  id: boolean;
  onSubmit?: () => void;
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