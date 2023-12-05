interface RurProps {
  title: string;
  onChange?: () => void;
}

export const Rur: React.FC<RurProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Rur</h2>
    </div>
  );
};