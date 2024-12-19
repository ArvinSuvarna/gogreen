interface MainProps {
  data: string;
  onClick?: () => void;
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