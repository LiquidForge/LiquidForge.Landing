import { useEffect } from "react"
import Logo from "../assets/forge-logo.png"

const Loading = () => {
  useEffect(() => {
    setTimeout(() => {
      document.body.setAttribute("data-loaded", "true")
    }, 1200)
  }, [])

  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 z-50 bg-transparent transition-all duration-0 opacity-100 group-data-loaded/body:opacity-0 group-data-loaded/body:invisible`}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[#111] animate-[1s_0.3s_ease-in-out_1_both_item-opacity]">
        <div className="absolute left-1/2 top-1/2 bottom-auto right-auto -translate-x-1/2 -translate-y-1/2">
          <div className="animate-[fade-out_0.3s_1_both]">
            <img
              src={Logo}
              alt="LiquidForge - Coming Soon and Landing Page Template"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black translate-y-[102%] animate-[1s_0.3s_ease-in-out_1_both_block-move]" />
    </div>
  )
}

export default Loading
