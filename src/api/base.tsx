interface BaseProps {
  title: string;
  onSubmit?: () => void;
}

export const Base: React.FC<BaseProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Base</h2>
    </div>
  );
};