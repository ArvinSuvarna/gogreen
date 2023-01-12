interface SupahikoProps {
  id: number;
  onChange?: () => void;
}

export const Supahiko: React.FC<SupahikoProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Supahiko</h2>
    </div>
  );
};