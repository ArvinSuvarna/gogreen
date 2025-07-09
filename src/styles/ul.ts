interface UlProps {
  data: string;
  onClick?: () => void;
}

export const Ul: React.FC<UlProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Ul</h2>
    </div>
  );
};