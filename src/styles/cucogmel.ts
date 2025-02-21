interface CucogmelProps {
  title: string;
  onChange?: () => void;
}

export const Cucogmel: React.FC<CucogmelProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Cucogmel</h2>
    </div>
  );
};