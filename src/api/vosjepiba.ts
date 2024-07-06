interface VosjepibaProps {
  data: string;
  onClick?: () => void;
}

export const Vosjepiba: React.FC<VosjepibaProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Vosjepiba</h2>
    </div>
  );
};