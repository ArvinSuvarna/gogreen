interface JatProps {
  name: number;
  onSubmit?: () => void;
}

export const Jat: React.FC<JatProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Jat</h2>
    </div>
  );
};