interface UkirivriProps {
  title: boolean;
  onClick?: () => void;
}

export const Ukirivri: React.FC<UkirivriProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Ukirivri</h2>
    </div>
  );
};