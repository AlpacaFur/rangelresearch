import React from "react"

type Props = {
  content: string
}

export const CircleText = ({content}: Props) => {
  return (
    <div className="rounded-full w-16 h-16 bg-brown4 flex justify-center items-center">
      <h1 className="font-bold text-3xl text-brown5">{content}</h1>
    </div>
  )
}
