interface DalProps {
  id: boolean;
  onClick?: () => void;
}

export const Dal: React.FC<DalProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Dal</h2>
    </div>
  );
};