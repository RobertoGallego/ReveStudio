interface BadgeProps {
  badgeContent?: number
  children: React.ReactNode
}

export const Badge = ({ badgeContent, children }: BadgeProps) => {
  return (
    <div style={{ position: "relative" }}>
      {children}

      {!!badgeContent && (
        <div
          style={{
            position: "absolute",
            bottom: "70%",
            left: "80%",
            display: "flex",
            alignItems: "center",
            backgroundColor: "red",
            minWidth: 16,
            height: 16,
            borderRadius: 10,
            width: "fit-content",
          }}
        >
          <p
            style={{
              color: "white",
              fontSize: 10,
              fontWeight: 600,
              fontFamily: "Arial, sans-serif",
              padding: "0 4.5px",
            }}
          >
            {badgeContent}
          </p>
        </div>
      )}
    </div>
  )
}
