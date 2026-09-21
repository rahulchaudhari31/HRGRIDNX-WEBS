import { ImageResponse } from "next/og";

export const alt = "HRGRIDNX - People operations, finally in sync.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() { return new ImageResponse(<div style={{ background: "#FAF8F3", color: "#0F2A24", width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "72px", fontFamily: "sans-serif" }}><div style={{ display: "flex", alignItems: "center", gap: "14px", fontSize: 24, fontWeight: 700, letterSpacing: "3px" }}><span style={{ width: 22, height: 22, borderRadius: 6, background: "#C6F432" }} />HRGRIDNX</div><div style={{ display: "flex", flexDirection: "column", gap: "22px" }}><div style={{ display: "flex", fontSize: 72, lineHeight: 1, fontWeight: 600, maxWidth: 900 }}>People operations,<br />finally in sync.</div><div style={{ display: "flex", fontSize: 26, color: "#5B6B65" }}>Hiring, people, time, pay and everything in between.</div></div><div style={{ display: "flex", justifyContent: "flex-end", fontSize: 18, color: "#5B6B65" }}>hrgridnx.example</div></div>, { ...size }); }
