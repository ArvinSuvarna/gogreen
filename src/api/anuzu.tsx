interface AnuzuProps {
  name: string;
  onSubmit?: () => void;
}

export const Anuzu: React.FC<AnuzuProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Anuzu</h2>
    </div>
  );
};