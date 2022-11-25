interface AkigakbuProps {
  data: number;
  onClick?: () => void;
}

export const Akigakbu: React.FC<AkigakbuProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Akigakbu</h2>
    </div>
  );
};