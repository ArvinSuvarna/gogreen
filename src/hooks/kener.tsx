interface KenerProps {
  data: string;
  onSubmit?: () => void;
}

export const Kener: React.FC<KenerProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Kener</h2>
    </div>
  );
};