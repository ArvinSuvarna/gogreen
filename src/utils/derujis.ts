interface DerujisProps {
  id: string;
  onChange?: () => void;
}

export const Derujis: React.FC<DerujisProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Derujis</h2>
    </div>
  );
};