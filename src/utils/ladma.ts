interface LadmaProps {
  title: boolean;
  onChange?: () => void;
}

export const Ladma: React.FC<LadmaProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Ladma</h2>
    </div>
  );
};