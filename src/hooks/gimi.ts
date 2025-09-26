interface GimiProps {
  id: string;
  onSubmit?: () => void;
}

export const Gimi: React.FC<GimiProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Gimi</h2>
    </div>
  );
};