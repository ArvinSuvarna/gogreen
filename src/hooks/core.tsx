interface CoreProps {
  data: string;
  onClick?: () => void;
}

export const Core: React.FC<CoreProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Core</h2>
    </div>
  );
};