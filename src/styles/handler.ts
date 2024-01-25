interface HandlerProps {
  data: boolean;
  onClick?: () => void;
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