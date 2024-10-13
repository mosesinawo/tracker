// import { MdOutlineInfo } from "react-icons/md";

function Tracking() {
  return (
    <>
      <section className="m:mt-20">
        <div className="flex justify-center items-center flex-col ">
          {/* <h4 className=" font-semibold text-3xl text-primary uppercase">
            Track another shipment
          </h4> */}
          <div className="flex items-center gap-1 mt-14">
            <p className=" font-light text-xl">Tracking Number:</p>
            <p className=" font-semibold text-xl">
              {" "}
              XX32-0322-8080
            </p>
          </div>
          {/* <div className="flex items-center gap-3 my-5">
            <span>
              <MdOutlineInfo color="#4d148c" size={25} />
            </span>
            <p className=" text-xl">
              No scheduled delivery date available at this time
            </p>
          </div> */}
          <div className="mt-5 text-center  ">
            <p className="text-4xl ">Your Package has been held</p>
            <p className="text-2xl my-10">Please reply to this email for more information regarding the held package. <br/> <a className="text-blue-600" href="mailto:fedexdeliverypackage@cargoonrender.com">fedexdeliverypackage@cargoonrender.com</a></p>
            <p className="text-5xl mt-3 font-light">Fri, Oct 12 2024</p>
          </div>

          <img src="/img/held.svg" alt="" className="mt-10" />

          <div className="flex flex-col items-center mt-3 gap-5 text-center">
            <p className=" uppercase font-semibold">In transit</p>

            <h5 className="text-3xl font-light mt-5 text-center">
              on FedEx vehicle for delivery <br />  Bear, Delaware
            </h5>
            <p className=" font-semibold text-blue-600 text-2xl uppercase cursor-pointer">
              {" "}
              Get status updates
            </p>
            <p className="text-2xl">Want to know when your package will arrive?</p>
          </div>
          {/* <div className="lg:w-[50%] w-full flex justify-between items-center mt-20">
            <div className=" flex flex-col gap-3">
              <span className=" text-2xl font-semibold text-gray-600">
                FROM
              </span>
              <span className=" text-2xl  text-gray-600 font-light">
                Sweden
              </span>
            </div>
            <div className=" flex flex-col gap-3">
              <span className=" text-2xl font-semibold text-gray-600">TO</span>
              <span className=" text-2xl  text-gray-600 font-light">Bear</span>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}

export default Tracking;
