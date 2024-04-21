interface OnProps {
  name: string;
  onSubmit?: () => void;
}

export const On: React.FC<OnProps> = ({
  title
}) => {
  return (
    <div>
      <h2>On</h2>
    </div>
  );
};