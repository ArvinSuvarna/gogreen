interface ApiProps {
  id: boolean;
  onClick?: () => void;
}

export const Api: React.FC<ApiProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Api</h2>
    </div>
  );
};