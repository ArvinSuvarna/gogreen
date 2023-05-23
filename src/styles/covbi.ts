interface CovbiProps {
  title: string;
  onChange?: () => void;
}

export const Covbi: React.FC<CovbiProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Covbi</h2>
    </div>
  );
};