interface OhiruejProps {
  name: number;
  onSubmit?: () => void;
}

export const Ohiruej: React.FC<OhiruejProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Ohiruej</h2>
    </div>
  );
};