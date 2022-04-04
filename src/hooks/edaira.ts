interface EdairaProps {
  id: string;
  onClick?: () => void;
}

export const Edaira: React.FC<EdairaProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Edaira</h2>
    </div>
  );
};