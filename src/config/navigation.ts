import type { LucideIcon } from "lucide-react";
import { BookOpen, Cog, MonitorPlay, Newspaper, ScrollText, Users } from "lucide-react";

export interface NavigationItem {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Cog, isContentType: true },
  { key: "characters", path: "/characters", icon: Users, isContentType: true },
  { key: "platforms", path: "/platforms", icon: MonitorPlay, isContentType: true },
  { key: "news", path: "/news", icon: Newspaper, isContentType: true },
  { key: "story", path: "/story", icon: ScrollText, isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
