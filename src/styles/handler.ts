interface HandlerProps {
  title: string;
  onSubmit?: () => void;
}

export const Handler: React.FC<HandlerProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Handler</h2>
    </div>
  );
};