interface CagucpuProps {
  data: boolean;
  onChange?: () => void;
}

export const Cagucpu: React.FC<CagucpuProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Cagucpu</h2>
    </div>
  );
};