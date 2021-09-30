import React from 'react'

function MenuButton() {
  return (
    <svg
      width={60}
      height={60}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx={30} cy={30} r={30} fill="#F3F3F3" />
      <rect x={20} y={22} width={20} height={2} rx={1} fill="#22252A" />
      <rect x={20} y={29} width={20} height={2} rx={1} fill="#22252A" />
      <rect x={20} y={36} width={20} height={2} rx={1} fill="#22252A" />
    </svg>
  )
}

export default MenuButton
