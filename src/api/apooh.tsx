interface ApoohProps {
  id: string;
  onSubmit?: () => void;
}

export const Apooh: React.FC<ApoohProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Apooh</h2>
    </div>
  );
};