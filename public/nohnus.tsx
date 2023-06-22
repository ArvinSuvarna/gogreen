interface NohnusProps {
  data: string;
  onClick?: () => void;
}

export const Nohnus: React.FC<NohnusProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Nohnus</h2>
    </div>
  );
};