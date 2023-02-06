interface EhProps {
  title: string;
  onChange?: () => void;
}

export const Eh: React.FC<EhProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Eh</h2>
    </div>
  );
};