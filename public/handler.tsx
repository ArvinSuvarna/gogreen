interface HandlerProps {
  name: string;
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