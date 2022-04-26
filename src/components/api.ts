interface ApiProps {
  data: number;
  onChange?: () => void;
}

export const Api: React.FC<ApiProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Api</h2>
    </div>
  );
};