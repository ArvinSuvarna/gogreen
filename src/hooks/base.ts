interface BaseProps {
  name: string;
  onClick?: () => void;
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