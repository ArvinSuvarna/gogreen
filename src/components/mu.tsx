interface MuProps {
  id: boolean;
  onSubmit?: () => void;
}

export const Mu: React.FC<MuProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Mu</h2>
    </div>
  );
};