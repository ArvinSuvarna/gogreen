interface ItoProps {
  data: boolean;
  onClick?: () => void;
}

export const Ito: React.FC<ItoProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Ito</h2>
    </div>
  );
};