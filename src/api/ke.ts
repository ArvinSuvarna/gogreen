interface KeProps {
  id: number;
  onSubmit?: () => void;
}

export const Ke: React.FC<KeProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Ke</h2>
    </div>
  );
};