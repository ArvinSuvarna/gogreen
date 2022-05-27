interface EcribProps {
  title: string;
  onSubmit?: () => void;
}

export const Ecrib: React.FC<EcribProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Ecrib</h2>
    </div>
  );
};