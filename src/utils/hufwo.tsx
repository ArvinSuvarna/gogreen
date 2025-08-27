interface HufwoProps {
  data: number;
  onChange?: () => void;
}

export const Hufwo: React.FC<HufwoProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Hufwo</h2>
    </div>
  );
};