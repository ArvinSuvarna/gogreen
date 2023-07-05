interface PihunProps {
  id: string;
  onChange?: () => void;
}

export const Pihun: React.FC<PihunProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Pihun</h2>
    </div>
  );
};