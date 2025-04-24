interface EnisesProps {
  title: boolean;
  onClick?: () => void;
}

export const Enises: React.FC<EnisesProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Enises</h2>
    </div>
  );
};