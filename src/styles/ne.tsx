interface NeProps {
  title: boolean;
  onChange?: () => void;
}

export const Ne: React.FC<NeProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Ne</h2>
    </div>
  );
};