interface VonitProps {
  data: string;
  onSubmit?: () => void;
}

export const Vonit: React.FC<VonitProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Vonit</h2>
    </div>
  );
};