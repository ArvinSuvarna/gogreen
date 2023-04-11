interface VaamProps {
  title: string;
  onSubmit?: () => void;
}

export const Vaam: React.FC<VaamProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Vaam</h2>
    </div>
  );
};