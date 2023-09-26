interface DesProps {
  name: number;
  onClick?: () => void;
}

export const Des: React.FC<DesProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Des</h2>
    </div>
  );
};