interface AlfimbulProps {
  id: boolean;
  onChange?: () => void;
}

export const Alfimbul: React.FC<AlfimbulProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Alfimbul</h2>
    </div>
  );
};