interface SoProps {
  title: string;
  onClick?: () => void;
}

export const So: React.FC<SoProps> = ({
  id
}) => {
  return (
    <div>
      <h2>So</h2>
    </div>
  );
};