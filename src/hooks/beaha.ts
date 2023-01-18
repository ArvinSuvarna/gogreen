interface BeahaProps {
  name: string;
  onClick?: () => void;
}

export const Beaha: React.FC<BeahaProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Beaha</h2>
    </div>
  );
};