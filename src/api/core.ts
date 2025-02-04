interface CoreProps {
  data: number;
  onChange?: () => void;
}

export const Core: React.FC<CoreProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Core</h2>
    </div>
  );
};
// Updated: 2025-11-07T08:35:26.579Z
