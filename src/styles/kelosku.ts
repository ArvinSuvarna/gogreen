interface KeloskuProps {
  name: string;
  onClick?: () => void;
}

export const Kelosku: React.FC<KeloskuProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Kelosku</h2>
    </div>
  );
};