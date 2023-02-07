interface DuProps {
  title: number;
  onSubmit?: () => void;
}

export const Du: React.FC<DuProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Du</h2>
    </div>
  );
};