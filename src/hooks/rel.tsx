interface RelProps {
  title: string;
  onChange?: () => void;
}

export const Rel: React.FC<RelProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Rel</h2>
    </div>
  );
};