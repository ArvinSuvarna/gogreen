interface UfmiProps {
  name: string;
  onSubmit?: () => void;
}

export const Ufmi: React.FC<UfmiProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Ufmi</h2>
    </div>
  );
};