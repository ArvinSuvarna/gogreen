interface CamProps {
  name: string;
  onSubmit?: () => void;
}

export const Cam: React.FC<CamProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Cam</h2>
    </div>
  );
};