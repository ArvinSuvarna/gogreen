interface AleProps {
  data: string;
  onChange?: () => void;
}

export const Ale: React.FC<AleProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Ale</h2>
    </div>
  );
};