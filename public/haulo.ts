interface HauloProps {
  id: boolean;
  onChange?: () => void;
}

export const Haulo: React.FC<HauloProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Haulo</h2>
    </div>
  );
};