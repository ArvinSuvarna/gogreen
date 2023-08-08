interface MainProps {
  title: number;
  onClick?: () => void;
}

export const Main: React.FC<MainProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Main</h2>
    </div>
  );
};