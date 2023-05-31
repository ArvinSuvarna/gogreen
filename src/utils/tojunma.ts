interface TojunmaProps {
  title: string;
  onClick?: () => void;
}

export const Tojunma: React.FC<TojunmaProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Tojunma</h2>
    </div>
  );
};