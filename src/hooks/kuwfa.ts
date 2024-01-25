interface KuwfaProps {
  title: string;
  onClick?: () => void;
}

export const Kuwfa: React.FC<KuwfaProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Kuwfa</h2>
    </div>
  );
};