interface HainiProps {
  name: string;
  onChange?: () => void;
}

export const Haini: React.FC<HainiProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Haini</h2>
    </div>
  );
};