import { ImageResponse } from "next/og";
import { pageMetadata } from "./site-content";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#000000",
          color: "#ffffff",
          fontFamily: "monospace",
          padding: "72px",
          position: "relative"
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "26px" }}>
          <div
            style={{
              fontSize: "118px",
              lineHeight: 0.86,
              letterSpacing: "-0.12em",
              fontWeight: 700
            }}
          >
            planarity
          </div>
          <div style={{ fontSize: "34px", color: "#d7d7d7", letterSpacing: "-0.04em" }}>
            daily graph puzzle
          </div>
          <div style={{ fontSize: "26px", color: "#a8a8a8" }}>untangle the graph</div>
        </div>
        <svg width="360" height="360" viewBox="0 0 1024 1024" aria-hidden="true">
          <rect x="0" y="0" width="1024" height="1024" rx="220" fill="#0f1319" />
          <g stroke="#f4f4f5" strokeOpacity="0.26" strokeWidth="18" strokeLinecap="round">
            <line x1="512" y1="194" x2="816" y2="414" />
            <line x1="816" y1="414" x2="700" y2="772" />
            <line x1="700" y1="772" x2="324" y2="772" />
            <line x1="324" y1="772" x2="208" y2="414" />
            <line x1="208" y1="414" x2="512" y2="194" />
            <line x1="512" y1="194" x2="700" y2="772" />
            <line x1="816" y1="414" x2="324" y2="772" />
          </g>
          <g fill="#f4f4f5" fillOpacity="0.08">
            <circle cx="512" cy="194" r="86" />
            <circle cx="816" cy="414" r="86" />
            <circle cx="700" cy="772" r="86" />
            <circle cx="324" cy="772" r="86" />
            <circle cx="208" cy="414" r="86" />
          </g>
          <g fill="#f4f4f5" fillOpacity="0.94">
            <circle cx="512" cy="194" r="52" />
            <circle cx="816" cy="414" r="52" />
            <circle cx="700" cy="772" r="52" />
            <circle cx="324" cy="772" r="52" />
            <circle cx="208" cy="414" r="52" />
          </g>
        </svg>
        <div
          style={{
            position: "absolute",
            left: "72px",
            bottom: "46px",
            fontSize: "22px",
            color: "#777777"
          }}
        >
          {pageMetadata.home.description}
        </div>
      </div>
    ),
    size
  );
}
