import cssText from "data-text:~style.css"
import { motion } from "framer-motion"
import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://leetcode.com/*"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const PlasmoOverlay = () => {
  return (
    <div
      onClick={() => {
        // chrome.runtime.sendMessage({ action: ACTIONS.OPEN_REGISTER })
        // const code = monaco.editor.getModels()
        // code[0].setValue("this")
      }}
      className="z-50 group flex fixed right-0 top-32">
      <div className="invisible group-hover:visible">
        {/* tooltip */}
        <motion.div
          className="absolute right-12 text-xs font-medium z-[999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}>
          <div className="font-bold relative bg-gray-100/60 text-slate-700 rounded-lg py-1.5 px-2 whitespace-nowrap">
            👀
          </div>
        </motion.div>
      </div>
      <div className="group-hover:pr-4 p-2 rounded-l-md pr-3 bg-white/5">
        <div className="h-3 rounded-full w-3 bg-rose-500/60 animate-pulse"></div>
      </div>
    </div>
  )
}

export default PlasmoOverlay
