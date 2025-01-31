interface InProps {
  title: boolean;
  onSubmit?: () => void;
}

export const In: React.FC<InProps> = ({
  title
}) => {
  return (
    <div>
      <h2>In</h2>
    </div>
  );
};