export default function VideoTest() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      style={{ width: "100%", height: "100vh", objectFit: "cover" }}
      src="/assets/hero-bg.mp4"
    />
  );
}
