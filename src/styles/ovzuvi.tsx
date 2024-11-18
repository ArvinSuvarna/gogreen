interface OvzuviProps {
  data: string;
  onSubmit?: () => void;
}

export const Ovzuvi: React.FC<OvzuviProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Ovzuvi</h2>
    </div>
  );
};