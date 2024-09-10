interface LiProps {
  title: number;
  onChange?: () => void;
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