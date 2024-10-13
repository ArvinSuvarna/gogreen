interface EbiProps {
  name: number;
  onSubmit?: () => void;
}

export const Ebi: React.FC<EbiProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Ebi</h2>
    </div>
  );
};