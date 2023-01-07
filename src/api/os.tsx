interface OsProps {
  data: boolean;
  onClick?: () => void;
}

export const Os: React.FC<OsProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Os</h2>
    </div>
  );
};