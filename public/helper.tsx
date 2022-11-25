interface HelperProps {
  title: number;
  onChange?: () => void;
}

export const Helper: React.FC<HelperProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Helper</h2>
    </div>
  );
};