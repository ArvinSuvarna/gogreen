interface MiajuuhoProps {
  name: boolean;
  onChange?: () => void;
}

export const Miajuuho: React.FC<MiajuuhoProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Miajuuho</h2>
    </div>
  );
};