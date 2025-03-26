interface DibProps {
  data: boolean;
  onSubmit?: () => void;
}

export const Dib: React.FC<DibProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Dib</h2>
    </div>
  );
};