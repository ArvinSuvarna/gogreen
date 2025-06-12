interface UfcoProps {
  data: number;
  onSubmit?: () => void;
}

export const Ufco: React.FC<UfcoProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Ufco</h2>
    </div>
  );
};