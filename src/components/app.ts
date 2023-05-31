interface AppProps {
  title: number;
  onSubmit?: () => void;
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