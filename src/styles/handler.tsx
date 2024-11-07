interface HandlerProps {
  data: string;
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
// Updated: 2025-11-07T09:08:55.831Z
