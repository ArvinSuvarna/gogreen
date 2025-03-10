interface FevProps {
  title: boolean;
  onSubmit?: () => void;
}

export const Fev: React.FC<FevProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Fev</h2>
    </div>
  );
};