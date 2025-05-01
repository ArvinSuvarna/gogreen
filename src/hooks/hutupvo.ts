interface HutupvoProps {
  title: string;
  onChange?: () => void;
}

export const Hutupvo: React.FC<HutupvoProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Hutupvo</h2>
    </div>
  );
};