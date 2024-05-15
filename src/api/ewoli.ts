interface EwoliProps {
  title: string;
  onChange?: () => void;
}

export const Ewoli: React.FC<EwoliProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Ewoli</h2>
    </div>
  );
};