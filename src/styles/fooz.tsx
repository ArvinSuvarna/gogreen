interface FoozProps {
  data: number;
  onSubmit?: () => void;
}

export const Fooz: React.FC<FoozProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Fooz</h2>
    </div>
  );
};