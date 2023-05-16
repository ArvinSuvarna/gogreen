interface ManagerProps {
  data: number;
  onSubmit?: () => void;
}

export const Manager: React.FC<ManagerProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Manager</h2>
    </div>
  );
};
// Updated: 2025-11-07T09:06:26.699Z
