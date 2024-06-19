interface JigvanboProps {
  data: number;
  onSubmit?: () => void;
}

export const Jigvanbo: React.FC<JigvanboProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Jigvanbo</h2>
    </div>
  );
};