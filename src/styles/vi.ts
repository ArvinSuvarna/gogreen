interface ViProps {
  data: boolean;
  onSubmit?: () => void;
}

export const Vi: React.FC<ViProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Vi</h2>
    </div>
  );
};