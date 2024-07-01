interface UnzagProps {
  title: number;
  onClick?: () => void;
}

export const Unzag: React.FC<UnzagProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Unzag</h2>
    </div>
  );
};