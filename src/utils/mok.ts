interface MokProps {
  name: number;
  onSubmit?: () => void;
}

export const Mok: React.FC<MokProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Mok</h2>
    </div>
  );
};