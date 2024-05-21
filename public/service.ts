interface ServiceProps {
  id: number;
  onChange?: () => void;
}

export const Service: React.FC<ServiceProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Service</h2>
    </div>
  );
};