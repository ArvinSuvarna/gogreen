interface ApuProps {
  name: boolean;
  onClick?: () => void;
}

export const Apu: React.FC<ApuProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Apu</h2>
    </div>
  );
};