interface Props {
  count: number;
  title: React.ReactNode;
}

const ProjectCounter = ({ count, title }: Props) => {
  return (
    <>
      <h1 className="text-foreground text-5xl xl:text-6xl font-bold">{count}</h1>
      <p className="text-sm font-semibold">{title}</p>
    </>
  );
};
export default ProjectCounter;
