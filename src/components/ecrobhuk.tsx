interface EcrobhukProps {
  name: string;
  onClick?: () => void;
}

export const Ecrobhuk: React.FC<EcrobhukProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Ecrobhuk</h2>
    </div>
  );
};