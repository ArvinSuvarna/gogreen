interface ViszosProps {
  data: string;
  onSubmit?: () => void;
}

export const Viszos: React.FC<ViszosProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Viszos</h2>
    </div>
  );
};