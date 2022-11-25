interface UtilsProps {
  name: number;
  onSubmit?: () => void;
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