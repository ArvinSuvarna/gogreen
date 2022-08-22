interface JeProps {
  data: number;
  onClick?: () => void;
}

export const Je: React.FC<JeProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Je</h2>
    </div>
  );
};