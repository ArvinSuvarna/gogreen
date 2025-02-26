interface HelperProps {
  data: boolean;
  onChange?: () => void;
}

export const Helper: React.FC<HelperProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Helper</h2>
    </div>
  );
};