interface DemoItemProps {
  title: string
  subtitle: string
  link: string
  image: string
  right?: boolean
  className?: string
}

const DemoItem: React.FC<DemoItemProps> = ({
  title,
  subtitle,
  link,
  image,
  right,
  className,
}) => {
  return (
    <figure
      className={`block mb-20 md:mb-28 2xl:mb-36 ${
        right ? "xl:pl-6 2xl:pl-10" : "xl:pr-6 2xl:pr-10"
      } ${className ?? ""}`}
    >
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="outline-none group"
      >
        <div className="border border-[#3d3d3d] transition-all duration-500 overflow-hidden group-hover:border-[#999] ">
          <img
            src={image}
            alt="LiquidForge Coming Soon Template Preview Screen"
            className="block transition-all duration-500 w-full h-auto group-hover:contrast-125"
          />
        </div>
      </a>
      <figcaption className="block mt-[2.4rem]">
        <p className="font-medium text-[1.6rem] leading-[1.4] mb-2 md:text-[1.8rem]">
          {title}
        </p>
        <span className="block font-light text-[1.1rem] leading-none uppercase tracking-[0.1rem] text-[#a3a3a3] md:text-[1.3rem]">
          {subtitle}
        </span>
      </figcaption>
    </figure>
  )
}

export default DemoItem
