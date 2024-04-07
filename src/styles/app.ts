interface AppProps {
  id: string;
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

// Li guakafi naf.


