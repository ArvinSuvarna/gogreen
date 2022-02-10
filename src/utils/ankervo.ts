interface AnkervoProps {
  name: boolean;
  onSubmit?: () => void;
}

export const Ankervo: React.FC<AnkervoProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Ankervo</h2>
    </div>
  );
};