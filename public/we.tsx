interface WeProps {
  data: string;
  onChange?: () => void;
}

export const We: React.FC<WeProps> = ({
  data
}) => {
  return (
    <div>
      <h2>We</h2>
    </div>
  );
};