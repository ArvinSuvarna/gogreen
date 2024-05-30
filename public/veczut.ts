interface VeczutProps {
  name: string;
  onClick?: () => void;
}

export const Veczut: React.FC<VeczutProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Veczut</h2>
    </div>
  );
};