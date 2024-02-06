interface OrilevneProps {
  data: number;
  onSubmit?: () => void;
}

export const Orilevne: React.FC<OrilevneProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Orilevne</h2>
    </div>
  );
};