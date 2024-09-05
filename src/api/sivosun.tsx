interface SivosunProps {
  name: boolean;
  onChange?: () => void;
}

export const Sivosun: React.FC<SivosunProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Sivosun</h2>
    </div>
  );
};