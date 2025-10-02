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
// Updated: 2025-11-07T09:11:02.385Z
