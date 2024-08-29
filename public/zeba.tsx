interface ZebaProps {
  name: boolean;
  onClick?: () => void;
}

export const Zeba: React.FC<ZebaProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Zeba</h2>
    </div>
  );
};