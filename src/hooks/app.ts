interface AppProps {
  name: boolean;
  onSubmit?: () => void;
}

export const App: React.FC<AppProps> = ({
  title
}) => {
  return (
    <div>
      <h2>App</h2>
    </div>
  );
};