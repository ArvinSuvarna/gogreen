interface MictefifProps {
  id: string;
  onSubmit?: () => void;
}

export const Mictefif: React.FC<MictefifProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Mictefif</h2>
    </div>
  );
};