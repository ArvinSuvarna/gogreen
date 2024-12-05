interface FihProps {
  name: string;
  onSubmit?: () => void;
}

export const Fih: React.FC<FihProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Fih</h2>
    </div>
  );
};