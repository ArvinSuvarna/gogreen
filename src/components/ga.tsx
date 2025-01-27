interface GaProps {
  name: number;
  onSubmit?: () => void;
}

export const Ga: React.FC<GaProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Ga</h2>
    </div>
  );
};