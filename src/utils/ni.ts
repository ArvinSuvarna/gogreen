interface NiProps {
  title: number;
  onChange?: () => void;
}

export const Ni: React.FC<NiProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Ni</h2>
    </div>
  );
};