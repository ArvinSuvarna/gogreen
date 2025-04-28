interface NijProps {
  id: number;
  onSubmit?: () => void;
}

export const Nij: React.FC<NijProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Nij</h2>
    </div>
  );
};