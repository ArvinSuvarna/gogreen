interface TutProps {
  title: number;
  onChange?: () => void;
}

export const Tut: React.FC<TutProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Tut</h2>
    </div>
  );
};