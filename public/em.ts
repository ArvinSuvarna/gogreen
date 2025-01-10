interface EmProps {
  name: string;
  onSubmit?: () => void;
}

export const Em: React.FC<EmProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Em</h2>
    </div>
  );
};