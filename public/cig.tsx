interface CigProps {
  title: number;
  onSubmit?: () => void;
}

export const Cig: React.FC<CigProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Cig</h2>
    </div>
  );
};