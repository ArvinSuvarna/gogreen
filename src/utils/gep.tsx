interface GepProps {
  title: boolean;
  onClick?: () => void;
}

export const Gep: React.FC<GepProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Gep</h2>
    </div>
  );
};