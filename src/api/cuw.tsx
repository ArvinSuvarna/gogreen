interface CuwProps {
  id: string;
  onChange?: () => void;
}

export const Cuw: React.FC<CuwProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Cuw</h2>
    </div>
  );
};