interface UtilsProps {
  title: number;
  onClick?: () => void;
}

export const Utils: React.FC<UtilsProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Utils</h2>
    </div>
  );
};