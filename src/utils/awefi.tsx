interface AwefiProps {
  name: string;
  onChange?: () => void;
}

export const Awefi: React.FC<AwefiProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Awefi</h2>
    </div>
  );
};