interface GadgukodProps {
  data: number;
  onSubmit?: () => void;
}

export const Gadgukod: React.FC<GadgukodProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Gadgukod</h2>
    </div>
  );
};