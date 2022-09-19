interface ServiceProps {
  title: string;
  onChange?: () => void;
}

export const Service: React.FC<ServiceProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Service</h2>
    </div>
  );
};