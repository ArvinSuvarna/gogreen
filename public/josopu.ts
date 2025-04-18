interface JosopuProps {
  title: boolean;
  onSubmit?: () => void;
}

export const Josopu: React.FC<JosopuProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Josopu</h2>
    </div>
  );
};