interface EwProps {
  data: boolean;
  onChange?: () => void;
}

export const Ew: React.FC<EwProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Ew</h2>
    </div>
  );
};