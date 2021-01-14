import * as React from "react"

function MailboxIcon(props) {
  return (
    <svg className='mailsvg' width={512} height={512} xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>{"background"}</title>
      <path fill="none" d="M-1-1h802v602H-1z" />
      <g>
        <title>{"Layer 1"}</title>
        <path
          d="M13.5 270.05s0 228 1 228 394-1 393.5-1.05c.5.05 2.5-75.95 2-76 .5.05 85.5-7.95 85-8 .5.05 6.5-238.95 6-239 .5.05-197.5-156.95-198-157 .5.05-196.5 157.05-197 157 .5.05-3.5 83.05-4 83 .5.05-89.5 3.05-88.5 13.05z"
          strokeWidth={1.5}
          stroke="#000"
          fill="#fff"
        />
        <path d="M302 0L92 164.545v79.819H0V512h420v-80.521h92V164.545L302 0zM122 212.237l39.705 32.127H122v-32.127zm242.094 62.086L210 399.798 55.906 274.323h308.188zM390 482.041H30V291.885l180 146.57 180-146.57v190.156zm4.641-237.677H209.358l-83.942-67.922L302 38.08l176.583 138.362-83.942 67.922zM482 401.52h-62V262.404l62-50.168V401.52z" />
      </g>
    </svg>
  )
}

export default MailboxIcon
