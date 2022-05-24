interface IfoProps {
  title: boolean;
  onChange?: () => void;
}

export const Ifo: React.FC<IfoProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Ifo</h2>
    </div>
  );
};