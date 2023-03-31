interface GiProps {
  id: string;
  onSubmit?: () => void;
}

export const Gi: React.FC<GiProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Gi</h2>
    </div>
  );
};