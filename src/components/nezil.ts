interface NezilProps {
  id: string;
  onChange?: () => void;
}

export const Nezil: React.FC<NezilProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Nezil</h2>
    </div>
  );
};