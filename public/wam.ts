interface WamProps {
  name: number;
  onClick?: () => void;
}

export const Wam: React.FC<WamProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Wam</h2>
    </div>
  );
};