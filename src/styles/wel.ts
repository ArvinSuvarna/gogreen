interface WelProps {
  data: string;
  onChange?: () => void;
}

export const Wel: React.FC<WelProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Wel</h2>
    </div>
  );
};