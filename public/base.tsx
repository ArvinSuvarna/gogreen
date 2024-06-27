interface BaseProps {
  title: string;
  onClick?: () => void;
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