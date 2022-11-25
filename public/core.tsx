interface CoreProps {
  data: string;
  onSubmit?: () => void;
}

export const Core: React.FC<CoreProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Core</h2>
    </div>
  );
};