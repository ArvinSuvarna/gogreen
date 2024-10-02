interface ServiceProps {
  name: boolean;
  onSubmit?: () => void;
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