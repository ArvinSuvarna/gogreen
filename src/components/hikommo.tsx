interface HikommoProps {
  data: string;
  onChange?: () => void;
}

export const Hikommo: React.FC<HikommoProps> = ({
  id
}) => {
  return (
    <div>
      <h2>Hikommo</h2>
    </div>
  );
};