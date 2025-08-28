interface IdProps {
  id: boolean;
  onClick?: () => void;
}

export const Id: React.FC<IdProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Id</h2>
    </div>
  );
};