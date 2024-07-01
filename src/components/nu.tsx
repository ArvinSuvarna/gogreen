interface NuProps {
  data: boolean;
  onChange?: () => void;
}

export const Nu: React.FC<NuProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Nu</h2>
    </div>
  );
};