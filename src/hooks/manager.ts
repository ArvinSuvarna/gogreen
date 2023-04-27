interface ManagerProps {
  name: boolean;
  onChange?: () => void;
}

export const Manager: React.FC<ManagerProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Manager</h2>
    </div>
  );
};
// Updated: 2025-11-07T09:06:20.310Z
