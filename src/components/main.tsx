interface MainProps {
  id: boolean;
  onSubmit?: () => void;
}

export const Main: React.FC<MainProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Main</h2>
    </div>
  );
};