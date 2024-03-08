import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpLong } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useRef } from "react"
import { animateScroll } from "react-scroll"

const ScrollTop = () => {
  const ref = useRef<HTMLAnchorElement>(null)

  const onScroll = () => {
    const scroll = window.scrollY

    if (scroll > 300) {
      ref.current?.setAttribute("data-visible", "true")
    } else {
      ref.current?.removeAttribute("data-visible")
      ref.current?.removeAttribute("data-fade-out")
    }
    if (scroll > 1200) {
      ref.current?.setAttribute("data-fade-out", "true")
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  const onScrollTop = () => animateScroll.scrollToTop()

  return (
    <a
      ref={ref}
      className={`invisible block fixed right-[15px] xl:right-[28px] bottom-[40px] xl:bottom-[28px] w-[3rem] h-[4.2rem] leading-[3.9rem] border-2 border-white text-[1.4rem] rounded-[1.5rem] overflow-hidden text-center group z-10 cursor-pointer opacity-0 hover:opacity-100 data-[visible=true]:visible data-[visible=true]:opacity-100 data-[fade-out=true]:!opacity-40 data-[fade-out=true]:hover:!opacity-100`}
      style={{ transition: "opacity 0.3s 0s, visibility 0s 0.3s" }}
      onClick={onScrollTop}
    >
      <span className="block relative translate-y-0 group-hover:-translate-y-full transition-transform duration-300 ease-smooth">
        <FontAwesomeIcon icon={faArrowUpLong} />
      </span>
      <span className="block absolute top-0 left-0 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-smooth">
        <FontAwesomeIcon icon={faArrowUpLong} />
      </span>
    </a>
  )
}

export default ScrollTop
