interface HelperProps {
  id: number;
  onClick?: () => void;
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