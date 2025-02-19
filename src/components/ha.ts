interface HaProps {
  id: string;
  onSubmit?: () => void;
}

export const Ha: React.FC<HaProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Ha</h2>
    </div>
  );
};