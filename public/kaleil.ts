interface KaleilProps {
  data: boolean;
  onSubmit?: () => void;
}

export const Kaleil: React.FC<KaleilProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Kaleil</h2>
    </div>
  );
};