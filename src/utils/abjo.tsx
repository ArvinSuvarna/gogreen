interface AbjoProps {
  id: boolean;
  onChange?: () => void;
}

export const Abjo: React.FC<AbjoProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Abjo</h2>
    </div>
  );
};