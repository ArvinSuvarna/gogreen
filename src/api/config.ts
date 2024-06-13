interface ConfigProps {
  data: string;
  onSubmit?: () => void;
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

// Additional feature
