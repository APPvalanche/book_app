interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div className="bg-white pb-6 sm:pb-8 lg:pb-12">{children}</div>;
};

export default Container;
