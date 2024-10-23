interface ZivakProps {
  data: number;
  onClick?: () => void;
}

export const Zivak: React.FC<ZivakProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Zivak</h2>
    </div>
  );
};