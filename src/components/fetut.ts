interface FetutProps {
  data: number;
  onChange?: () => void;
}

export const Fetut: React.FC<FetutProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Fetut</h2>
    </div>
  );
};