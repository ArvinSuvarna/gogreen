interface MainProps {
  name: number;
  onChange?: () => void;
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
// Updated: 2025-11-07T09:09:57.152Z
