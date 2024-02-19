interface ManagerProps {
  data: number;
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