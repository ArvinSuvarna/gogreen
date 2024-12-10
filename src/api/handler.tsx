interface HandlerProps {
  title: number;
  onClick?: () => void;
}

export const Handler: React.FC<HandlerProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Handler</h2>
    </div>
  );
};