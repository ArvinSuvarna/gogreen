interface HeProps {
  data: number;
  onClick?: () => void;
}

export const He: React.FC<HeProps> = ({
  data
}) => {
  return (
    <div>
      <h2>He</h2>
    </div>
  );
};