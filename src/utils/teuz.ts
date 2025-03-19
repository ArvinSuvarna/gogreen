interface TeuzProps {
  name: boolean;
  onSubmit?: () => void;
}

export const Teuz: React.FC<TeuzProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Teuz</h2>
    </div>
  );
};