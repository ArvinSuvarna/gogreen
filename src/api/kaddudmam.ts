interface KaddudmamProps {
  data: number;
  onSubmit?: () => void;
}

export const Kaddudmam: React.FC<KaddudmamProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Kaddudmam</h2>
    </div>
  );
};