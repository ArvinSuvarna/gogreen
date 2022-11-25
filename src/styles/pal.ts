interface PalProps {
  name: string;
  onClick?: () => void;
}

export const Pal: React.FC<PalProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Pal</h2>
    </div>
  );
};