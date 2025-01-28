interface KokProps {
  data: number;
  onChange?: () => void;
}

export const Kok: React.FC<KokProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Kok</h2>
    </div>
  );
};