interface MainProps {
  name: boolean;
  onSubmit?: () => void;
}

export const Main: React.FC<MainProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Main</h2>
    </div>
  );
};