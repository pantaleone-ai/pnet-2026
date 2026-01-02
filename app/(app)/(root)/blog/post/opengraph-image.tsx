import { ImageResponse } from "next/og";

// 1. Force Edge Runtime (Critical for Vercel performance)
export const runtime = "edge";

export const alt = "Pantaleone AI - Article";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// 2. Define the params to match your folder structure [slug]
interface Props {
  params: {
    slug: string;
  };
}

export default async function Image({ params }: Props) {
  // 3. Convert slug "my-cool-agent" -> "My Cool Agent"
  // This prevents the need for database calls, ensuring 100% uptime for OG images
  const title = params.slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  // 4. Fetch Font (Inter SemiBold)
  // We use standard fetch because fs/localFont doesn't work in Edge Runtime
  const fontData = await fetch(
    new URL("https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYAZ9hiA.woff2", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#020617", // slate-950 (Dark Theme Background)
          padding: "80px",
          fontFamily: "Inter",
        }}
      >
        {/* Top: Brand Header */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Minimalist Logo Icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            </svg>
          </div>
          <span style={{ fontSize: 32, fontWeight: 700, color: "white", letterSpacing: "-1px" }}>
            Pantaleone.net
          </span>
        </div>

        {/* Center: The Article Title */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "1000px" }}>
          <div
            style={{
              fontSize: 80,
              fontWeight: 700,
              color: "white",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              // Note: 'text-wrap: balance' is not supported in OG images yet
            }}
          >
            {title}
          </div>
          <div style={{ fontSize: 36, color: "#94a3b8", fontWeight: 500 }}>
            Systems Architecture & AI Workflows
          </div>
        </div>

        {/* Bottom: Accent Bar */}
        <div
          style={{
            width: "100%",
            height: "8px",
            background: "linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)",
            borderRadius: "4px",
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: fontData,
          style: "normal",
          weight: 600,
        },
      ],
    }
  );
}