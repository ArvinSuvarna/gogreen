interface WetbejinProps {
  title: boolean;
  onSubmit?: () => void;
}

export const Wetbejin: React.FC<WetbejinProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Wetbejin</h2>
    </div>
  );
};