interface PahProps {
  data: number;
  onClick?: () => void;
}

export const Pah: React.FC<PahProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Pah</h2>
    </div>
  );
};