interface ServiceProps {
  title: string;
  onClick?: () => void;
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