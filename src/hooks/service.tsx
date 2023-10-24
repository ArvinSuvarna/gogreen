interface ServiceProps {
  data: string;
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

// Additional feature
