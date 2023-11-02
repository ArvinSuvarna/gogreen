interface RedomProps {
  id: string;
  onChange?: () => void;
}

export const Redom: React.FC<RedomProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Redom</h2>
    </div>
  );
};