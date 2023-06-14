interface ConfigProps {
  data: number;
  onSubmit?: () => void;
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