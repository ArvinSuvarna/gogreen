interface RikhetProps {
  title: boolean;
  onChange?: () => void;
}

export const Rikhet: React.FC<RikhetProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Rikhet</h2>
    </div>
  );
};