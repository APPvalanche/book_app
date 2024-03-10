interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div className="bg-white max-w-[1400px] mx-auto px-4">{children}</div>;
};

export default Container;
