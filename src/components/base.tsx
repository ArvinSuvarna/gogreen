interface BaseProps {
  name: string;
  onChange?: () => void;
}

export const Base: React.FC<BaseProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Base</h2>
    </div>
  );
};