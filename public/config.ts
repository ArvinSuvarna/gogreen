interface ConfigProps {
  title: boolean;
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
// Updated: 2025-11-07T08:47:33.994Z
