interface PenmipProps {
  id: string;
  onClick?: () => void;
}

export const Penmip: React.FC<PenmipProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Penmip</h2>
    </div>
  );
};