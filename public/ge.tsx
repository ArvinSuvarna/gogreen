interface GeProps {
  name: string;
  onSubmit?: () => void;
}

export const Ge: React.FC<GeProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Ge</h2>
    </div>
  );
};