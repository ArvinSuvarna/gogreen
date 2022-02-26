interface NaProps {
  data: boolean;
  onClick?: () => void;
}

export const Na: React.FC<NaProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Na</h2>
    </div>
  );
};