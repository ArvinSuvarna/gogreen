interface UtilsProps {
  data: string;
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