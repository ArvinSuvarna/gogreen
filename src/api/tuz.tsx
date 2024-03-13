interface TuzProps {
  data: number;
  onSubmit?: () => void;
}

export const Tuz: React.FC<TuzProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Tuz</h2>
    </div>
  );
};