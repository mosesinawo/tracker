
// import errorImg from '/img/error.svg'

const Error = () => {
  return (
    <>
      <section className="pt-20">
        <div className="flex justify-center items-center flex-col">
            <img src="/img/error.svg" alt="" />
            <p className='text-[#5D5D5D] md:text-[4.2rem] md:leading-[5rem] text-2xl text-center'>
                The tracking number you entered is invalid. <br />
                Please correct and retry.
            </p>
            <div className='mt-16'>
                <h4 className=" font-semibold md:text-5xl text-xl  text-primary uppercase">
                    Track another shipment
                </h4>
            </div>
        </div>

      </section>
    </>
  )
}

export default Error