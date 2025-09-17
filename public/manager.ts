interface ManagerProps {
  title: string;
  onSubmit?: () => void;
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