interface PetcedProps {
  title: boolean;
  onSubmit?: () => void;
}

export const Petced: React.FC<PetcedProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Petced</h2>
    </div>
  );
};