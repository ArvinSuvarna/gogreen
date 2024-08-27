interface OnProps {
  data: boolean;
  onChange?: () => void;
}

export const On: React.FC<OnProps> = ({
  data
}) => {
  return (
    <div>
      <h2>On</h2>
    </div>
  );
};