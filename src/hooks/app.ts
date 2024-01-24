interface AppProps {
  name: number;
  onClick?: () => void;
}

export const App: React.FC<AppProps> = ({
  name
}) => {
  return (
    <div>
      <h2>App</h2>
    </div>
  );
};
// Updated: 2025-11-07T08:44:42.959Z
