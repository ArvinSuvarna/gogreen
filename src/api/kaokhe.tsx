interface KaokheProps {
  data: boolean;
  onSubmit?: () => void;
}

export const Kaokhe: React.FC<KaokheProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Kaokhe</h2>
    </div>
  );
};