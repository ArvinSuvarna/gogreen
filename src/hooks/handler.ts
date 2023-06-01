interface HandlerProps {
  title: boolean;
  onClick?: () => void;
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