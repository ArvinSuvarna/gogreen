interface ValProps {
  name: string;
  onChange?: () => void;
}

export const Val: React.FC<ValProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Val</h2>
    </div>
  );
};