interface ZiulProps {
  data: string;
  onClick?: () => void;
}

export const Ziul: React.FC<ZiulProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Ziul</h2>
    </div>
  );
};