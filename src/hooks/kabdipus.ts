interface KabdipusProps {
  id: number;
  onSubmit?: () => void;
}

export const Kabdipus: React.FC<KabdipusProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Kabdipus</h2>
    </div>
  );
};