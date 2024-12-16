interface PudProps {
  title: number;
  onChange?: () => void;
}

export const Pud: React.FC<PudProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Pud</h2>
    </div>
  );
};