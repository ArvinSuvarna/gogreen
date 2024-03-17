interface UtilsProps {
  id: string;
  onClick?: () => void;
}

export const Utils: React.FC<UtilsProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Utils</h2>
    </div>
  );
};