interface KubabimProps {
  data: number;
  onSubmit?: () => void;
}

export const Kubabim: React.FC<KubabimProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Kubabim</h2>
    </div>
  );
};