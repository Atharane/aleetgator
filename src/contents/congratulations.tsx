import { RiArrowRightUpLine, RiBeerLine } from "@remixicon/react"
import cssText from "data-text:~style.css"
import { motion } from "framer-motion"
import type { PlasmoCSConfig } from "plasmo"
import React, { useState } from "react"

import SquiglyProgressBar from "~components/squiglyProgressBar"
import Tooltip from "~components/ui/tooltip"

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

export const Config: PlasmoCSConfig = {
  matches: ["https://leetcode.com/*"],
  world: "MAIN"
}

type Config = {
  text_content: string
  problems_solved_today: number
  problems_scheduled_today: number
  recurrence_timestamp: Date
  next_problem: string
}

const PlasmoOverlay = () => {
  const [config, setConfig] = useState<Config>({
    text_content: "let's f*cking gooo!",
    problems_solved_today: 2,
    problems_scheduled_today: 6,
    recurrence_timestamp: new Date(),
    next_problem: ""
  })

  return (
    <motion.div>
      <div className="space-y-2 -rotate-2 p-2 border-dashed border-2 backdrop-blur-sm border-white/20 rounded-[2rem] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex gap-1">
          <div className="relative">
            <div className="p-2 bg-white w-fit rounded-3xl">
              <div className="w-fit whitespace-nowrap rounded-2xl bg-[#176A3A] px-6 py-4 pr-10 text-5xl font-bold text-white">
                <span>
                  <RiBeerLine className="relative inline-block w-10 h-10 mr-1 text-slate-100/50 bottom-1" />
                </span>
                {config.text_content}
              </div>
            </div>
            <div className="absolute flex -right-6 bottom-16 rotate-12">
              <div className="p-2 bg-white shadow-2xl w-fit rounded-3xl shadow-slate-800">
                <div className="w-fit rounded-2xl bg-[#5551FF] p-4 text-5xl font-bold text-white">
                  {config.problems_solved_today}
                </div>
              </div>
            </div>
          </div>
          <button className="p-2 ml-1 bg-white shadow-2xl group w-fit rounded-3xl shadow-slate-800">
            <div className="flex w-fit rounded-2xl shadow-inner shadow-red-800 bg-[#f31551] p-4 text-5xl font-bold text-white">
              <span>break</span>
              <div className="group-hover:-rotate-12">;</div>
            </div>
          </button>
        </div>
        <div className="flex items-center gap-2">
          <SquiglyProgressBar
            className="mx-auto"
            progress={config.problems_solved_today}
            total={config.problems_scheduled_today}
          />
          <div className="flex gap-2">
            <div className="p-2 bg-white shadow-2xl w-fit rounded-3xl shadow-slate-800">
              <div className="p-4 text-5xl font-bold text-white w-fit rounded-2xl bg-slate-800">
                11
                <span className="text-2xl">d</span>
              </div>
            </div>
            <div className="p-2 bg-white shadow-2xl w-fit rounded-3xl shadow-slate-800">
              <div className="p-4 text-5xl font-bold text-white shadow-inner w-fit rounded-2xl bg-slate-800">
                43
                <span className="text-2xl">h</span>
              </div>
            </div>

            <div className="relative flex group">
              <div className="invisible group-hover:visible">
                <Tooltip text="https://leetcode.com/problems/two-sum-submissions" />
              </div>
              <a
                href={config.next_problem}
                className="p-2 bg-white shadow-2xl cursor-pointer w-fit rounded-3xl shadow-slate-800">
                <div className="p-4 text-5xl font-bold text-white bg-blue-600 shadow-inner w-fit rounded-2xl">
                  <RiArrowRightUpLine className="w-12 h-12 group-hover:rotate-12" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default PlasmoOverlay
