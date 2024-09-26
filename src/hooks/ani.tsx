interface AniProps {
  data: string;
  onSubmit?: () => void;
}

export const Ani: React.FC<AniProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Ani</h2>
    </div>
  );
};