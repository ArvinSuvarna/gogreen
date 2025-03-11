interface ZebvalohProps {
  title: string;
  onChange?: () => void;
}

export const Zebvaloh: React.FC<ZebvalohProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Zebvaloh</h2>
    </div>
  );
};