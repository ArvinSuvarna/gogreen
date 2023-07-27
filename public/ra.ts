interface RaProps {
  name: number;
  onSubmit?: () => void;
}

export const Ra: React.FC<RaProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Ra</h2>
    </div>
  );
};