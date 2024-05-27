interface ApiProps {
  name: boolean;
  onChange?: () => void;
}

export const Api: React.FC<ApiProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Api</h2>
    </div>
  );
};