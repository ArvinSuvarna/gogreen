interface KeeceroProps {
  name: string;
  onSubmit?: () => void;
}

export const Keecero: React.FC<KeeceroProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Keecero</h2>
    </div>
  );
};