interface BucjuhkesProps {
  name: number;
  onClick?: () => void;
}

export const Bucjuhkes: React.FC<BucjuhkesProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Bucjuhkes</h2>
    </div>
  );
};