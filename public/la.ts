interface LaProps {
  name: number;
  onClick?: () => void;
}

export const La: React.FC<LaProps> = ({
  title
}) => {
  return (
    <div>
      <h2>La</h2>
    </div>
  );
};