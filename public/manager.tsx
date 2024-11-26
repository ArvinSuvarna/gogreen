interface ManagerProps {
  data: boolean;
  onClick?: () => void;
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