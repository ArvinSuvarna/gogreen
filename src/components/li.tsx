interface LiProps {
  id: number;
  onClick?: () => void;
}

export const Li: React.FC<LiProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Li</h2>
    </div>
  );
};