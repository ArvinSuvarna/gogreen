interface MaltizjeProps {
  name: string;
  onSubmit?: () => void;
}

export const Maltizje: React.FC<MaltizjeProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Maltizje</h2>
    </div>
  );
};