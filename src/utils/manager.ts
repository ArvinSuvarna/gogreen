interface ManagerProps {
  id: boolean;
  onClick?: () => void;
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