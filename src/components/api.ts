interface ApiProps {
  id: number;
  onSubmit?: () => void;
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