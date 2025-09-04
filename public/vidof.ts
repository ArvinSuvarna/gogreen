interface VidofProps {
  data: number;
  onChange?: () => void;
}

export const Vidof: React.FC<VidofProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Vidof</h2>
    </div>
  );
};