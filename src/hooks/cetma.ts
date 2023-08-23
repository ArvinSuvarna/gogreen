interface CetmaProps {
  title: string;
  onClick?: () => void;
}

export const Cetma: React.FC<CetmaProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Cetma</h2>
    </div>
  );
};