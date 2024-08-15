interface BakhuProps {
  data: string;
  onChange?: () => void;
}

export const Bakhu: React.FC<BakhuProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Bakhu</h2>
    </div>
  );
};