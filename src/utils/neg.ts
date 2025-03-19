interface NegProps {
  title: string;
  onChange?: () => void;
}

export const Neg: React.FC<NegProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Neg</h2>
    </div>
  );
};