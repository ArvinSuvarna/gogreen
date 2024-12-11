interface NifutojProps {
  title: number;
  onChange?: () => void;
}

export const Nifutoj: React.FC<NifutojProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Nifutoj</h2>
    </div>
  );
};