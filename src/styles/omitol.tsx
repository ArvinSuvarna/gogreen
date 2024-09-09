interface OmitolProps {
  title: string;
  onSubmit?: () => void;
}

export const Omitol: React.FC<OmitolProps> = ({
  name
}) => {
  return (
    <div>
      <h2>Omitol</h2>
    </div>
  );
};