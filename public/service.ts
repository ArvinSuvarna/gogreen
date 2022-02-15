interface ServiceProps {
  title: number;
  onSubmit?: () => void;
}

export const Service: React.FC<ServiceProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Service</h2>
    </div>
  );
};