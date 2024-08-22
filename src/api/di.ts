interface DiProps {
  data: number;
  onClick?: () => void;
}

export const Di: React.FC<DiProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Di</h2>
    </div>
  );
};