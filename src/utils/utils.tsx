interface UtilsProps {
  data: boolean;
  onSubmit?: () => void;
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