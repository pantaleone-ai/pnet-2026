"use client";

import { memo, useState, useCallback, useEffect, useRef } from "react";
import { Tweet } from "react-tweet";
import type { TestimonialType } from "@/features/home/types/TestimonialType";
import YouTubeEmbed from "@/features/home/components/YouTubeEmbed";

// Type guard for Shoutout
function isTweetShoutout(
  item: TestimonialType,
): item is TestimonialType & { type: "tweet"; id: string } {
  return item.type === "tweet" && typeof item.id === "string";
}

type TestimonialItemProps = {
  item: TestimonialType;
  index: number;
};

export default memo(function TestimonialItem({
  item,
  index,
}: TestimonialItemProps) {
  const [hasError, setHasError] = useState(false);
  const isMountedRef = useRef(false);

  // Track component mounted state
  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  // Defer state update to prevent setState-in-render error
  // The Tweet component may call onError during render, so we use setTimeout
  // to schedule the state update for after the current render completes
  const handleError = useCallback(() => {
    setTimeout(() => {
      if (isMountedRef.current) {
        setHasError(true);
      }
    }, 0);
  }, []);

  if (hasError) {
    return (
      <div className="rounded-xl bg-gray-100 p-4 text-center">
        <p className="text-foreground">Content unavailable</p>
      </div>
    );
  }

  return (
    <div key={`${item.type}-${index}`} className="rounded-xl">
      {isTweetShoutout(item) ? (
        <Tweet id={item.id} onError={handleError} />
      ) : item.url ? (
        <div className="aspect-video w-full rounded-xl overflow-hidden">
          <YouTubeEmbed
            embedUrl={item.url}
            alt="YouTube video testimonial"
            className="h-full w-full"
          />
        </div>
      ) : null}
    </div>
  );
});
