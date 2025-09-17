interface JegcoProps {
  name: string;
  onSubmit?: () => void;
}

export const Jegco: React.FC<JegcoProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Jegco</h2>
    </div>
  );
};