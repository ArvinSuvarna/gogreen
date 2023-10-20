interface KizanegeProps {
  name: string;
  onClick?: () => void;
}

export const Kizanege: React.FC<KizanegeProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Kizanege</h2>
    </div>
  );
};