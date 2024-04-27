interface BaProps {
  name: string;
  onChange?: () => void;
}

export const Ba: React.FC<BaProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Ba</h2>
    </div>
  );
};