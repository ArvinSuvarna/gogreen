interface MobalProps {
  title: string;
  onClick?: () => void;
}

export const Mobal: React.FC<MobalProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Mobal</h2>
    </div>
  );
};