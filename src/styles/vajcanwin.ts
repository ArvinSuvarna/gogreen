interface VajcanwinProps {
  id: string;
  onClick?: () => void;
}

export const Vajcanwin: React.FC<VajcanwinProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Vajcanwin</h2>
    </div>
  );
};