interface MopmiProps {
  title: number;
  onClick?: () => void;
}

export const Mopmi: React.FC<MopmiProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Mopmi</h2>
    </div>
  );
};