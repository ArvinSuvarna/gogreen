interface NijeProps {
  name: boolean;
  onChange?: () => void;
}

export const Nije: React.FC<NijeProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Nije</h2>
    </div>
  );
};