interface GopovProps {
  id: number;
  onSubmit?: () => void;
}

export const Gopov: React.FC<GopovProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Gopov</h2>
    </div>
  );
};