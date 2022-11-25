interface BaseProps {
  title: number;
  onSubmit?: () => void;
}

export const Base: React.FC<BaseProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Base</h2>
    </div>
  );
};