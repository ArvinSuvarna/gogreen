interface NeadProps {
  id: boolean;
  onSubmit?: () => void;
}

export const Nead: React.FC<NeadProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Nead</h2>
    </div>
  );
};