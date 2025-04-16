interface UtilsProps {
  id: string;
  onChange?: () => void;
}

export const Utils: React.FC<UtilsProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Utils</h2>
    </div>
  );
};