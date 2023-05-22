interface ManagerProps {
  name: boolean;
  onChange?: () => void;
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