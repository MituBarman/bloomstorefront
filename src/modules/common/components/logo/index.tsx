"use client"
interface logoprops {
  size: number;
}
const Logo: React.FC<logoprops> = ({ size }) => {
  return (
    <div className="py-1">
        <img
          src="/images/logo-bg.png"
          style={{height:size,width:size}}
        />
    </div>
  );
};

export default Logo;
