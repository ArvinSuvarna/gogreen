interface PiProps {
  title: string;
  onChange?: () => void;
}

export const Pi: React.FC<PiProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Pi</h2>
    </div>
  );
};