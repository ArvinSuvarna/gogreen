interface HelperProps {
  data: string;
  onChange?: () => void;
}

export const Helper: React.FC<HelperProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Helper</h2>
    </div>
  );
};