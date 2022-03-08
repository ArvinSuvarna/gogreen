interface KoswivguProps {
  name: boolean;
  onSubmit?: () => void;
}

export const Koswivgu: React.FC<KoswivguProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Koswivgu</h2>
    </div>
  );
};