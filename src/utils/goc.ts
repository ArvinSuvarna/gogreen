interface GocProps {
  id: string;
  onChange?: () => void;
}

export const Goc: React.FC<GocProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Goc</h2>
    </div>
  );
};