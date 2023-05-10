interface BivuzProps {
  name: boolean;
  onSubmit?: () => void;
}

export const Bivuz: React.FC<BivuzProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Bivuz</h2>
    </div>
  );
};