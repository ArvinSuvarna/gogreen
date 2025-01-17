interface ErProps {
  name: number;
  onSubmit?: () => void;
}

export const Er: React.FC<ErProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Er</h2>
    </div>
  );
};