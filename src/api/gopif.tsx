interface GopifProps {
  title: number;
  onSubmit?: () => void;
}

export const Gopif: React.FC<GopifProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Gopif</h2>
    </div>
  );
};