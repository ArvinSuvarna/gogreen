interface SeProps {
  data: number;
  onSubmit?: () => void;
}

export const Se: React.FC<SeProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Se</h2>
    </div>
  );
};