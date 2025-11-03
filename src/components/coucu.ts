interface CoucuProps {
  id: string;
  onSubmit?: () => void;
}

export const Coucu: React.FC<CoucuProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Coucu</h2>
    </div>
  );
};