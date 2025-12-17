"use client";

import GitHubStars from "@/components/header/shared/GithubStars";
import { SOURCE_CODE_GITHUB_REPO } from "@/config/seo/site";
import { useEffect, useState } from "react";

export default function GithubButton() {
  const [stargazersCount, setStargazersCount] = useState(0);

  useEffect(() => {
    async function fetchStars() {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${SOURCE_CODE_GITHUB_REPO}`,
          {
            // Add cache and error handling to prevent CORS/rate limit issues
            cache: "force-cache",
          },
        );
        if (response.ok) {
          const data = await response.json();
          setStargazersCount(data.stargazers_count || 0);
        }
      } catch (error) {
        // Silently fail - GitHub API may be rate-limited or blocked
        // This is expected behavior and not a critical error
      }
    }
    fetchStars();
  }, []);

  return (
    <GitHubStars
      repo={SOURCE_CODE_GITHUB_REPO}
      stargazersCount={stargazersCount}
    />
  );
}
