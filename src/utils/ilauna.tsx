interface IlaunaProps {
  name: string;
  onClick?: () => void;
}

export const Ilauna: React.FC<IlaunaProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Ilauna</h2>
    </div>
  );
};