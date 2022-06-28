interface UtilsProps {
  name: number;
  onSubmit?: () => void;
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