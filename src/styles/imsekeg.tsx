interface ImsekegProps {
  data: string;
  onChange?: () => void;
}

export const Imsekeg: React.FC<ImsekegProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Imsekeg</h2>
    </div>
  );
};