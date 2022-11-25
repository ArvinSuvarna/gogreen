interface GewwinProps {
  title: number;
  onChange?: () => void;
}

export const Gewwin: React.FC<GewwinProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Gewwin</h2>
    </div>
  );
};