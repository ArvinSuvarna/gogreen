interface BezuzProps {
  id: string;
  onChange?: () => void;
}

export const Bezuz: React.FC<BezuzProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Bezuz</h2>
    </div>
  );
};