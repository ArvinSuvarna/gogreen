interface AliProps {
  id: number;
  onSubmit?: () => void;
}

export const Ali: React.FC<AliProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Ali</h2>
    </div>
  );
};