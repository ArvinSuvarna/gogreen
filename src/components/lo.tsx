interface LoProps {
  id: number;
  onSubmit?: () => void;
}

export const Lo: React.FC<LoProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Lo</h2>
    </div>
  );
};