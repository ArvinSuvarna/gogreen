interface RatProps {
  title: string;
  onClick?: () => void;
}

export const Rat: React.FC<RatProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Rat</h2>
    </div>
  );
};