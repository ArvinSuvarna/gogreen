interface MainProps {
  title: boolean;
  onClick?: () => void;
}

export const Main: React.FC<MainProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Main</h2>
    </div>
  );
};