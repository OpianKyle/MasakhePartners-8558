interface Props {
  image: string;
  height?: string;
  overlay?: string;
  children?: React.ReactNode;
}

export default function ImageBanner({ image, height = "300px", overlay = "rgba(15,50,107,0.65)", children }: Props) {
  return (
    <div style={{ position: "relative", height, overflow: "hidden" }}>
      <img src={image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 35%", display: "block" }} />
      <div style={{ position: "absolute", inset: 0, background: overlay }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, #192943 0%, transparent 18%, transparent 82%, #192943 100%)" }} />
      {children && (
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
          {children}
        </div>
      )}
    </div>
  );
}
