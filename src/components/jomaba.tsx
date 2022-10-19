interface JomabaProps {
  title: string;
  onChange?: () => void;
}

export const Jomaba: React.FC<JomabaProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Jomaba</h2>
    </div>
  );
};