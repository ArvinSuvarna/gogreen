interface ManagerProps {
  name: boolean;
  onSubmit?: () => void;
}

export const Manager: React.FC<ManagerProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Manager</h2>
    </div>
  );
};