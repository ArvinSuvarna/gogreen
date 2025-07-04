interface GaoniafuProps {
  title: string;
  onSubmit?: () => void;
}

export const Gaoniafu: React.FC<GaoniafuProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Gaoniafu</h2>
    </div>
  );
};