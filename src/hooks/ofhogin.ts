interface OfhoginProps {
  title: boolean;
  onSubmit?: () => void;
}

export const Ofhogin: React.FC<OfhoginProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Ofhogin</h2>
    </div>
  );
};