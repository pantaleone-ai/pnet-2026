import posthog from "posthog-js";

// Initialize PostHog analytics in production only
if (
  process.env.NODE_ENV === "production" &&
  process.env.NEXT_PUBLIC_POSTHOG_KEY &&
  process.env.NEXT_PUBLIC_POSTHOG_HOST
) {
  try {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      ui_host: process.env.NEXT_PUBLIC_POSTHOG_UI_HOST,
      session_idle_timeout_seconds: 1800,
      cookieless_mode: "on_reject",
      // Disable automatic event capture to prevent errors
      autocapture: false,
      // Disable session recording
      disable_session_recording: true,
      // Prevent loading external scripts that may fail
      advanced_disable_decide: true,
    });

    // Prevent tracking until consent is given via c15t
    posthog.has_opted_out_capturing();
  } catch (error) {
    console.warn("PostHog initialization failed:", error);
  }
}
