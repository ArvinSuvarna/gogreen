interface LiProps {
  data: string;
  onSubmit?: () => void;
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