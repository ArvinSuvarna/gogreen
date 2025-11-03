interface BacProps {
  name: string;
  onChange?: () => void;
}

export const Bac: React.FC<BacProps> = ({
  data
}) => {
  return (
    <div>
      <h2>Bac</h2>
    </div>
  );
};