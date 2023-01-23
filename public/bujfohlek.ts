interface BujfohlekProps {
  name: string;
  onChange?: () => void;
}

export const Bujfohlek: React.FC<BujfohlekProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Bujfohlek</h2>
    </div>
  );
};