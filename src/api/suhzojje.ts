interface SuhzojjeProps {
  title: string;
  onClick?: () => void;
}

export const Suhzojje: React.FC<SuhzojjeProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Suhzojje</h2>
    </div>
  );
};