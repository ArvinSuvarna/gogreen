interface GihusProps {
  name: boolean;
  onSubmit?: () => void;
}

export const Gihus: React.FC<GihusProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Gihus</h2>
    </div>
  );
};