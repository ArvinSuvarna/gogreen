interface WocetProps {
  title: string;
  onClick?: () => void;
}

export const Wocet: React.FC<WocetProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Wocet</h2>
    </div>
  );
};