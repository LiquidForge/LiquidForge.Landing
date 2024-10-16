import Logo from "../assets/forge-logo.png"
import Wave from "../assets/wave.webp"

const Intro = () => {
  return (
    <div style={{ position: 'relative' }}>
      <div className="relative xl:container flex max-md:flex-col items-center justify-between md:h-[96px] max-md:py-16 px-[calc(10%-1.5rem)] xl:px-0 opacity-0 group-data-loaded/body:animate-[0.8s_0.6s_ease-in-out_1_both_fade-in]">
        <model-viewer src={"models/logo.glb"} camera-controls shadow-intensity="1" camera-orbit="calc(0deg + 0 * 4rad) calc(90deg + 0 * 180deg) 20m" style={{ width: "172px" }} ></model-viewer>
        <div className="overflow-hidden inline-flex px-[1.5rem] max-md:w-full">
          <a
            href="https://app.liquidforge.io"
            target="_blank"
            rel="noreferrer"
            className="relative border-2 border-white bg-transparent text-white block h-16 px-8 rounded-[2rem] font-semibold text-[1.4rem] leading-[3.6rem] group w-full text-center"
          >
            <span className="block ease-smooth duration-300 transition-transform group-hover:-translate-y-full">
              Use
            </span>
            <span className="absolute top-0 left-0 w-full text-center translate-y-full block ease-smooth duration-300 transition-transform group-hover:translate-y-0">
              Use
            </span>
          </a>
        </div>
      </div>
      <div className="xl:container px-[10%] xl:px-6">
	  <model-viewer className="anim-3d" src={"models/dwarf.glb"} autoplay scale="6 6 6 " shadow-intensity="1" camera-target="1.2m 5m 0m" camera-orbit="calc(-20deg + 0 * 4rad) calc(40deg + 0 * 180deg) 15m" style={{ border: '1px solid red;', position: "absolute", top: 0, bottom: 0, left: 0, right: 0, width: "100%", minHeight: "1000px" }} ></model-viewer>
        <div className="pt-16 pb-44 md:pt-20 md:pb-[22.8rem] 2xl:pt-32 2xl:pb-[31rem] relative bg-no-repeat bg-bottom bg-[length:100%] text-center">
          {/* <span className="block text-[1.4rem] 2xl:text-[1.6rem] leading-none uppercase tracking-[0.1rem] mb-[2.4rem] opacity-0 group-data-loaded/body:animate-[0.4s_0.3s_ease-in-out_1_both_slide-in-up]">
            Try LiquidForge
          </span> */}
          <h1 className="text-[2.8rem] leading-[1.4] md:text-[3.5rem] 2xl:text-[5rem] md:max-w-[540px] 2xl:max-w-[780px] md:mx-auto opacity-0 group-data-loaded/body:animate-[0.4s_0.4s_ease-in-out_1_both_slide-in-up]">
            The Ultimate Market Maker Experience
          </h1>
        </div>
      </div>
      {/* <div className="relative overflow-hidden h-[200px] md:h-[280px] 2xl:h-[400px] -mt-[10.6rem] md:-mt-[16.2rem] 2xl:-mt-[25rem]" style={{ filter: "hue-rotate(120deg)", marginTop: "20px" }} >
        <img
          src={Wave}
          alt=""
          className="block absolute top-0 left-1/2 right-auto -translate-x-1/2 h-full w-auto mx-auto max-w-none"
        />
      </div> */}
    </div>
  )
}

export default Intro
