interface WaProps {
  id: string;
  onChange?: () => void;
}

export const Wa: React.FC<WaProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Wa</h2>
    </div>
  );
};