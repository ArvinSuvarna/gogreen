interface WatugnugProps {
  id: string;
  onSubmit?: () => void;
}

export const Watugnug: React.FC<WatugnugProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Watugnug</h2>
    </div>
  );
};