interface AppProps {
  data: number;
  onClick?: () => void;
}

export const App: React.FC<AppProps> = ({
  data
}) => {
  return (
    <div>
      <h2>App</h2>
    </div>
  );
};
// Updated: 2025-11-07T09:07:33.011Z
