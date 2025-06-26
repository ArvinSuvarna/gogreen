interface HamjoProps {
  id: number;
  onSubmit?: () => void;
}

export const Hamjo: React.FC<HamjoProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Hamjo</h2>
    </div>
  );
};