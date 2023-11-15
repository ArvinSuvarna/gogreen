interface VulwonProps {
  title: boolean;
  onChange?: () => void;
}

export const Vulwon: React.FC<VulwonProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Vulwon</h2>
    </div>
  );
};