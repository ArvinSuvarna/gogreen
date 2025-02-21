interface RigwugalProps {
  name: boolean;
  onSubmit?: () => void;
}

export const Rigwugal: React.FC<RigwugalProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Rigwugal</h2>
    </div>
  );
};