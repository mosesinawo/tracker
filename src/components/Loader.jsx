

function Loader() {
  return (
    <div className="flex fixed w-full justify-center items-center h-screen top-0 bg-[rgba(0,0,0,0.24)] ">
    <span className="circle animate-loader"></span>
    <span className="circle animate-loader animation-delay-200"></span>
    <span className="circle animate-loader animation-delay-400"></span>
  </div>
  );
}

export default Loader;
