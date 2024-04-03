interface IfuProps {
  name: string;
  onClick?: () => void;
}

export const Ifu: React.FC<IfuProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Ifu</h2>
    </div>
  );
};