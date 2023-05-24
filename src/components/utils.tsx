interface UtilsProps {
  name: number;
  onChange?: () => void;
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