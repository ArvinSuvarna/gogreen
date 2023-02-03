interface AjwesuProps {
  data: string;
  onClick?: () => void;
}

export const Ajwesu: React.FC<AjwesuProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Ajwesu</h2>
    </div>
  );
};