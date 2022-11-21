interface RukProps {
  name: number;
  onSubmit?: () => void;
}

export const Ruk: React.FC<RukProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Ruk</h2>
    </div>
  );
};