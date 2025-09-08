interface AvatarProps {
  label: string
  src?: string
}

export const Avatar = ({ label, src }: AvatarProps) => {
  return (
    <div
      aria-label={label ?? "Avatar"}
      style={{
        width: 40,
        height: 40,
        borderRadius: "50%",
        backgroundColor: "#36418c",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        fontSize: 16,
        fontFamily: "sans-serif",
      }}
    >
      {src ? (
        <img
          src={src}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      ) : (
        <span
          style={{
            lineHeight: 1,
            transform: "translateY(1px)",
          }}
        >
          {label.slice(0, 2).toUpperCase()}
        </span>
      )}
    </div>
  )
}
