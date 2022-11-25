interface PodnuraProps {
  data: string;
  onClick?: () => void;
}

export const Podnura: React.FC<PodnuraProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Podnura</h2>
    </div>
  );
};