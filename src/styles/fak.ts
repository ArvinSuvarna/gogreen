interface FakProps {
  data: number;
  onChange?: () => void;
}

export const Fak: React.FC<FakProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Fak</h2>
    </div>
  );
};