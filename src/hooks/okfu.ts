interface OkfuProps {
  title: number;
  onClick?: () => void;
}

export const Okfu: React.FC<OkfuProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Okfu</h2>
    </div>
  );
};