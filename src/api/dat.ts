interface DatProps {
  id: boolean;
  onSubmit?: () => void;
}

export const Dat: React.FC<DatProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Dat</h2>
    </div>
  );
};