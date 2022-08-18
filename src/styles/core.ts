interface CoreProps {
  id: number;
  onClick?: () => void;
}

export const Core: React.FC<CoreProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Core</h2>
    </div>
  );
};