interface RizeProps {
  name: string;
  onChange?: () => void;
}

export const Rize: React.FC<RizeProps> = ({
  title
}) => {
  return (
    <div>
      <h2>Rize</h2>
    </div>
  );
};