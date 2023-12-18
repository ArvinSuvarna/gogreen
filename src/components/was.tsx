interface WasProps {
  id: string;
  onClick?: () => void;
}

export const Was: React.FC<WasProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Was</h2>
    </div>
  );
};