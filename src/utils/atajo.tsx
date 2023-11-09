interface AtajoProps {
  name: number;
  onSubmit?: () => void;
}

export const Atajo: React.FC<AtajoProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Atajo</h2>
    </div>
  );
};