interface HiProps {
  id: number;
  onChange?: () => void;
}

export const Hi: React.FC<HiProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Hi</h2>
    </div>
  );
};