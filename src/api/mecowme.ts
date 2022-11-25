interface MecowmeProps {
  name: string;
  onChange?: () => void;
}

export const Mecowme: React.FC<MecowmeProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Mecowme</h2>
    </div>
  );
};