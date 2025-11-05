interface ApiProps {
  title: boolean;
  onChange?: () => void;
}

export const Api: React.FC<ApiProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Api</h2>
    </div>
  );
};