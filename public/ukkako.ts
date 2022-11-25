interface UkkakoProps {
  title: boolean;
  onClick?: () => void;
}

export const Ukkako: React.FC<UkkakoProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Ukkako</h2>
    </div>
  );
};