interface VuProps {
  name: number;
  onChange?: () => void;
}

export const Vu: React.FC<VuProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Vu</h2>
    </div>
  );
};