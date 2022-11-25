interface BaseProps {
  name: boolean;
  onClick?: () => void;
}

export const Base: React.FC<BaseProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Base</h2>
    </div>
  );
};