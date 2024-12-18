interface EheProps {
  data: string;
  onSubmit?: () => void;
}

export const Ehe: React.FC<EheProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Ehe</h2>
    </div>
  );
};