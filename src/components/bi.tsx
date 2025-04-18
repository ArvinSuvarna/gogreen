interface BiProps {
  name: string;
  onClick?: () => void;
}

export const Bi: React.FC<BiProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Bi</h2>
    </div>
  );
};