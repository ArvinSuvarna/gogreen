interface UzvadProps {
  data: string;
  onSubmit?: () => void;
}

export const Uzvad: React.FC<UzvadProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Uzvad</h2>
    </div>
  );
};