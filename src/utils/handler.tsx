interface HandlerProps {
  name: boolean;
  onSubmit?: () => void;
}

export const Handler: React.FC<HandlerProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Handler</h2>
    </div>
  );
};