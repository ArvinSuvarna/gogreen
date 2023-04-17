interface HelperProps {
  id: boolean;
  onClick?: () => void;
}

export const Helper: React.FC<HelperProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Helper</h2>
    </div>
  );
};