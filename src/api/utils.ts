interface UtilsProps {
  data: boolean;
  onClick?: () => void;
}

export const Utils: React.FC<UtilsProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Utils</h2>
    </div>
  );
};