interface UwutakovProps {
  data: string;
  onChange?: () => void;
}

export const Uwutakov: React.FC<UwutakovProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Uwutakov</h2>
    </div>
  );
};