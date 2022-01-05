interface ApiProps {
  id: string;
  onClick?: () => void;
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