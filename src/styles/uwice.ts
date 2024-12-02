interface UwiceProps {
  title: number;
  onClick?: () => void;
}

export const Uwice: React.FC<UwiceProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Uwice</h2>
    </div>
  );
};