interface HandlerProps {
  id: number;
  onChange?: () => void;
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