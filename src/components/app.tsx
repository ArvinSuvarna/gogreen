interface AppProps {
  data: number;
  onChange?: () => void;
}

export const App: React.FC<AppProps> = ({
  id
}) => {
  return (
    <div>
      <h2>App</h2>
    </div>
  );
};