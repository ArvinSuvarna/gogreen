interface HandlerProps {
  title: string;
  onSubmit?: () => void;
}

export const Handler: React.FC<HandlerProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Handler</h2>
    </div>
  );
};