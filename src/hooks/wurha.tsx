interface WurhaProps {
  data: string;
  onSubmit?: () => void;
}

export const Wurha: React.FC<WurhaProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Wurha</h2>
    </div>
  );
};