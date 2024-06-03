interface TirjuhProps {
  id: boolean;
  onSubmit?: () => void;
}

export const Tirjuh: React.FC<TirjuhProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Tirjuh</h2>
    </div>
  );
};