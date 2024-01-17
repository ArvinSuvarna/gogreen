interface SiProps {
  id: boolean;
  onSubmit?: () => void;
}

export const Si: React.FC<SiProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Si</h2>
    </div>
  );
};