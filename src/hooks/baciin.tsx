interface BaciinProps {
  title: boolean;
  onSubmit?: () => void;
}

export const Baciin: React.FC<BaciinProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Baciin</h2>
    </div>
  );
};