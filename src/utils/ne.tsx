interface NeProps {
  data: boolean;
  onClick?: () => void;
}

export const Ne: React.FC<NeProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Ne</h2>
    </div>
  );
};