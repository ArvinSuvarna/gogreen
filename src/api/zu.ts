interface ZuProps {
  data: boolean;
  onChange?: () => void;
}

export const Zu: React.FC<ZuProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Zu</h2>
    </div>
  );
};