interface HevProps {
  name: boolean;
  onClick?: () => void;
}

export const Hev: React.FC<HevProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Hev</h2>
    </div>
  );
};