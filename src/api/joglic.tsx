interface JoglicProps {
  id: number;
  onClick?: () => void;
}

export const Joglic: React.FC<JoglicProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Joglic</h2>
    </div>
  );
};