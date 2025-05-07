interface RifdeProps {
  title: number;
  onSubmit?: () => void;
}

export const Rifde: React.FC<RifdeProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Rifde</h2>
    </div>
  );
};