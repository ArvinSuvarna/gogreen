interface CohoProps {
  data: boolean;
  onClick?: () => void;
}

export const Coho: React.FC<CohoProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Coho</h2>
    </div>
  );
};