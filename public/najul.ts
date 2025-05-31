interface NajulProps {
  data: string;
  onChange?: () => void;
}

export const Najul: React.FC<NajulProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Najul</h2>
    </div>
  );
};