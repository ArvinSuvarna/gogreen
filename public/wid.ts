interface WidProps {
  id: string;
  onChange?: () => void;
}

export const Wid: React.FC<WidProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Wid</h2>
    </div>
  );
};