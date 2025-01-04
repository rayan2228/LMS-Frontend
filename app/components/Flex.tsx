const Flex = ({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties; 
}) => {
  return <div className={`flex ${className}`} style={style}>{children}</div>;
};
export default Flex;
