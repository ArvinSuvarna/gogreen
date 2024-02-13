interface LecsisProps {
  data: boolean;
  onChange?: () => void;
}

export const Lecsis: React.FC<LecsisProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Lecsis</h2>
    </div>
  );
};