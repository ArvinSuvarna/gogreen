interface TudeldedProps {
  data: string;
  onClick?: () => void;
}

export const Tudelded: React.FC<TudeldedProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Tudelded</h2>
    </div>
  );
};