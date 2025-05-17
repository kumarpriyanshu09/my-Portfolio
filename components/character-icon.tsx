import Image from "next/image"

interface CharacterIconProps {
  character: "finn" | "lumpy" | "rick" | "simpson"
  size?: number
  className?: string
}

export function CharacterIcon({ character, size = 48, className = "" }: CharacterIconProps) {
  const iconPaths = {
    finn: "/icons8-finn-ios_filled-32.png",
    lumpy: "/icons8-lumpy space princess-ios_filled-32.png",
    rick: "/icons8-rick sanchez-ios_filled-32.png",
    simpson: "/icons8-homer simpson-ios7-32.png",
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Image
        src={iconPaths[character] || "/placeholder.svg"}
        alt={`${character} character icon`}
        width={size}
        height={size}
        className="object-contain"
      />
    </div>
  )
}
