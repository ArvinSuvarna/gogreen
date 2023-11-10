interface NaurioriProps {
  title: boolean;
  onSubmit?: () => void;
}

export const Nauriori: React.FC<NaurioriProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Nauriori</h2>
    </div>
  );
};