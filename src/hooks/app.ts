interface AppProps {
  id: boolean;
  onChange?: () => void;
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