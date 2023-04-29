interface CoreProps {
  name: boolean;
  onClick?: () => void;
}

export const Core: React.FC<CoreProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Core</h2>
    </div>
  );
};