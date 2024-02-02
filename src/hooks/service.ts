interface ServiceProps {
  data: boolean;
  onSubmit?: () => void;
}

export const Service: React.FC<ServiceProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Service</h2>
    </div>
  );
};