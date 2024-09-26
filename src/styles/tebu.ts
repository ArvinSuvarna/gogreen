interface TebuProps {
  title: string;
  onSubmit?: () => void;
}

export const Tebu: React.FC<TebuProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Tebu</h2>
    </div>
  );
};