interface BaProps {
  name: string;
  onClick?: () => void;
}

export const Ba: React.FC<BaProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Ba</h2>
    </div>
  );
};