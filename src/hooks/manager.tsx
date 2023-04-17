interface ManagerProps {
  title: boolean;
  onSubmit?: () => void;
}

export const Manager: React.FC<ManagerProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Manager</h2>
    </div>
  );
};