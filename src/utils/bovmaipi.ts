interface BovmaipiProps {
  title: boolean;
  onChange?: () => void;
}

export const Bovmaipi: React.FC<BovmaipiProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Bovmaipi</h2>
    </div>
  );
};