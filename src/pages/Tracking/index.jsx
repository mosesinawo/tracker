function Tracking() {
  return (
    <>
      <section className="mt-32">
        <div className="flex justify-center items-center flex-col">
          <h4 className=" font-semibold text-3xl text-primary uppercase">
            Track another shipment
          </h4>
          <div className="flex items-center gap-1 mt-14">
            <p className=" font-light text-xl">Tracking Number:</p>
            <p className=" font-semibold text-blue-600 text-xl"> XX123-456-789</p>
          </div>
          <div className="mt-5 text-center">
            <p className=" uppercase">In transit</p>

           <h5 className="text-2xl font-light mt-5" >on FedEx vehicle for delivery <br/> -  Shibuya, Tokyo</h5>
          </div>

          <img src="/img/tracker.svg" alt="" className="mt-3" />
        <div className="lg:w-[50%] w-full flex justify-between items-center mt-20">
          <div className=" flex flex-col gap-3">
            <span className=" text-2xl font-semibold text-gray-600">FROM</span>
            <span className=" text-2xl  text-gray-600 font-light">Texas</span>
          </div>
          <div className=" flex flex-col gap-3">
            <span className=" text-2xl font-semibold text-gray-600">TO</span>
            <span className=" text-2xl  text-gray-600 font-light">Netherlands</span>
          </div>
        </div>
        </div>

      </section>
    </>
  );
}

export default Tracking;
