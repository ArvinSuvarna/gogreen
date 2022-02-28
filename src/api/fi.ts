interface FiProps {
  title: string;
  onClick?: () => void;
}

export const Fi: React.FC<FiProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Fi</h2>
    </div>
  );
};