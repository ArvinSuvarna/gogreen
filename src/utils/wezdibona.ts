interface WezdibonaProps {
  title: boolean;
  onSubmit?: () => void;
}

export const Wezdibona: React.FC<WezdibonaProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Wezdibona</h2>
    </div>
  );
};