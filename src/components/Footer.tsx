import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
  return (
    <footer className="bg-[#0c0c0c]" style={{ position: 'fixed', bottom: 0, width: '100%', left: 0, height: '50px' }}>
      <div className="relative xl:container px-[10%] xl:px-6">
        <div className=" text-center">
          {/* <p className="font-light text-[2rem] leading-[1.4] md:text-[2.8rem] md:max-w-[320px] 2xl:text-[3.6rem] 2xl:max-w-[420px] mx-auto mb-[3.2rem]">
            Show your ceativity and get noticed today!
          </p> */}
          {/* <div className="overflow-hidden inline-flex">
            <a
              href="https://1.envato.market/9gBzn0"
              target="_blank"
              rel="noreferrer"
              className="relative border-2 border-white bg-white text-[#141414] block md:inline-block h-[5.2rem] px-[2.4rem] rounded-[2.6rem] font-semibold text-[1.6rem] leading-[4.9rem] group"
            >
              <span className="block ease-smooth duration-300 transition-transform group-hover:-translate-y-full">
                Purchase now
              </span>
              <span className="absolute top-0 left-0 w-full translate-y-full block ease-smooth duration-300 transition-transform group-hover:translate-y-0">
                Purchase now
              </span>
            </a>
          </div> */}
        </div>
        <div style={{ padding: '20px', width: '100vw', transform: 'translate(-50%, 0px)' }} className="xl:absolute flex max-xl:flex-col justify-between items-center xl:left-1/2 right-auto xl:-translate-x-1/2 w-full pb-16 xl:pb-[2.8rem] text-[#999] uppercase tracking-[0.1rem] text-[1.1rem] md:px-6 leading-[1.3] md:text-[1.2rem] text-center footer-div">
          <p>
            <a
              href="mailto:support@liquidforge.io?subject=Message%20from%20Visitor"
              className="hover:text-white duration-500 transition-colors"
            >
              support@liquidforge.io
            </a>
            &nbsp;- Your MM your control.
          </p>
          <p>
            TWITTER | GITHUB
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
