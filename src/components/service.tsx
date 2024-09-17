interface ServiceProps {
  data: string;
  onClick?: () => void;
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