interface UgacerProps {
  name: number;
  onSubmit?: () => void;
}

export const Ugacer: React.FC<UgacerProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Ugacer</h2>
    </div>
  );
};