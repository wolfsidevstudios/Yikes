
import { CreatorStats, SocialProfile, Video, Product, ShortVideo, StatItem, SpeedrunChallenge, TimelineEvent } from './types';

export const CREATOR_INFO: CreatorStats = {
  realName: "Xander Keller",
  subscribers: "1.57 Million",
  location: "United States",
  spouse: "Hannah Keller",
  niche: ["Commentary", "Social Experiments", "AI Challenges", "Viral Growth"],
  bio: "Xander is a YouTuber best known for high-effort experiments where he tests the limits of social media algorithms. His content frequently involves creating fake personas to see if they can go viral. He is also famous for his \"0 to 100,000 Subscribers\" challenges."
};

export const SOCIALS: SocialProfile[] = [
  { platform: "YouTube (Main)", handle: "@yikes.", url: "https://www.youtube.com/@yikes.", icon: "youtube" },
  { platform: "YouTube (2nd)", handle: "@yikestwo", url: "https://www.youtube.com/@yikestwo", icon: "youtube" },
  { platform: "Instagram", handle: "@xanderyikes", url: "https://www.instagram.com/xanderyikes", icon: "instagram" },
  { platform: "TikTok", handle: "@xanderyikes", url: "https://www.tiktok.com/@xanderyikes", icon: "tiktok" },
  { platform: "Twitter / X", handle: "@xanderyikes", url: "https://twitter.com/xanderyikes", icon: "twitter" },
  { platform: "Discord", handle: ".gg/yikes", url: "https://discord.gg/yikes", icon: "discord" },
];

export const TOP_VIDEOS: Video[] = [
  { id: "OeXdY6avIIs", title: "I Tricked the Internet with Fake AI Videos", views: "2.3M", link: "https://www.youtube.com/watch?v=OeXdY6avIIs", thumbnailUrl: "https://img.youtube.com/vi/OeXdY6avIIs/maxresdefault.jpg" },
  { id: "h_o5l_KRs0Q", title: "I Clicked 100 YouTube Scam Ads", views: "1.8M", link: "https://www.youtube.com/watch?v=h_o5l_KRs0Q", thumbnailUrl: "https://img.youtube.com/vi/h_o5l_KRs0Q/maxresdefault.jpg" },
  { id: "4I7sdnzDYd4", title: "I Became an \"Amazon Influencer\"", views: "1.5M", link: "https://www.youtube.com/watch?v=4I7sdnzDYd4", thumbnailUrl: "https://img.youtube.com/vi/4I7sdnzDYd4/maxresdefault.jpg" },
  { id: "XgXNy5nGSlM", title: "I Followed YouTube Tutorials with No Views", views: "1.2M", link: "https://www.youtube.com/watch?v=XgXNy5nGSlM", thumbnailUrl: "https://img.youtube.com/vi/XgXNy5nGSlM/maxresdefault.jpg" },
  { id: "AoRNrASs8XQ", title: "I Went Viral on YouTube Kids", views: "3.8M", link: "https://www.youtube.com/watch?v=AoRNrASs8XQ", thumbnailUrl: "https://img.youtube.com/vi/AoRNrASs8XQ/maxresdefault.jpg" },
  { id: "1d5xOZfXAR4", title: "I Went Viral on YouTube in 2009", views: "1.2M", link: "https://www.youtube.com/watch?v=1d5xOZfXAR4", thumbnailUrl: "https://img.youtube.com/vi/1d5xOZfXAR4/maxresdefault.jpg" },
  { id: "tOQvVm_MoRQ", title: "I Tricked YouTubers with AI Clones", views: "1.3M", link: "https://www.youtube.com/watch?v=tOQvVm_MoRQ", thumbnailUrl: "https://img.youtube.com/vi/tOQvVm_MoRQ/maxresdefault.jpg" },
  { id: "nihTn-VlMXg", title: "I Went Viral on Non-Social Medias", views: "2M", link: "https://www.youtube.com/watch?v=nihTn-VlMXg", thumbnailUrl: "https://img.youtube.com/vi/nihTn-VlMXg/maxresdefault.jpg" },
  { id: "TPW7GRd51Q0", title: "I Went Viral on the Worst TikTok Knockoff", views: "2.4M", link: "https://www.youtube.com/watch?v=TPW7GRd51Q0", thumbnailUrl: "https://img.youtube.com/vi/TPW7GRd51Q0/maxresdefault.jpg" },
  { id: "z4lfaqBYgjQ", title: "I Tricked Boomers with AI Brainrot", views: "1.9M", link: "https://www.youtube.com/watch?v=z4lfaqBYgjQ", thumbnailUrl: "https://img.youtube.com/vi/z4lfaqBYgjQ/maxresdefault.jpg" },
  { id: "s7-WWTL7vuc", title: "I Tricked the Internet with an AI YouTuber", views: "1.4M", link: "https://www.youtube.com/watch?v=s7-WWTL7vuc", thumbnailUrl: "https://img.youtube.com/vi/s7-WWTL7vuc/maxresdefault.jpg" },
  { id: "h35p2UDjxHQ", title: "I Went Viral on the Least Popular Social Media", views: "4.2M", link: "https://www.youtube.com/watch?v=h35p2UDjxHQ", thumbnailUrl: "https://img.youtube.com/vi/h35p2UDjxHQ/maxresdefault.jpg" },
  { id: "vgtiwJA3weQ", title: "I Tricked Influencers with Fake Products", views: "1.1M", link: "https://www.youtube.com/watch?v=vgtiwJA3weQ", thumbnailUrl: "https://img.youtube.com/vi/vgtiwJA3weQ/maxresdefault.jpg" },
  { id: "HbhQyYU4ueQ", title: "I Recreated 100 Viral TikToks (again)", views: "2.2M", link: "https://www.youtube.com/watch?v=HbhQyYU4ueQ", thumbnailUrl: "https://img.youtube.com/vi/HbhQyYU4ueQ/maxresdefault.jpg" },
  { id: "fPQiNDQsx-E", title: "I Clicked 100 TikTok Scam Ads", views: "1.6M", link: "https://www.youtube.com/watch?v=fPQiNDQsx-E", thumbnailUrl: "https://img.youtube.com/vi/fPQiNDQsx-E/maxresdefault.jpg" },
  { id: "aRIrvh1iBC4", title: "I Tricked the Internet with an AI Influencer", views: "1.7M", link: "https://www.youtube.com/watch?v=aRIrvh1iBC4", thumbnailUrl: "https://img.youtube.com/vi/aRIrvh1iBC4/maxresdefault.jpg" },
  { id: "aqoCLtBkS6Q", title: "0 ➜ 100,000 Subscribers in 10 Days (DAY 1)", views: "6.9M", link: "https://www.youtube.com/watch?v=aqoCLtBkS6Q", thumbnailUrl: "https://img.youtube.com/vi/aqoCLtBkS6Q/maxresdefault.jpg" },
  { id: "PfF-KuKiri0", title: "0 ➜ 100,000 Subscribers in 10 Days (DAY 2)", views: "2.5M", link: "https://www.youtube.com/watch?v=PfF-KuKiri0", thumbnailUrl: "https://img.youtube.com/vi/PfF-KuKiri0/maxresdefault.jpg" },
  { id: "gglx0wnbn6U", title: "0 ➜ 100,000 Subscribers in 10 Days (DAY 3)", views: "2.1M", link: "https://www.youtube.com/watch?v=gglx0wnbn6U", thumbnailUrl: "https://img.youtube.com/vi/gglx0wnbn6U/maxresdefault.jpg" },
  { id: "7deq1ohGhaU", title: "0 ➜ 100,000 Subscribers in 10 Days (DAY 6)", views: "1.8M", link: "https://www.youtube.com/watch?v=7deq1ohGhaU", thumbnailUrl: "https://img.youtube.com/vi/7deq1ohGhaU/maxresdefault.jpg" },
];

export const SHOP_ITEMS: Product[] = [
  {
    id: "buster-bundle",
    name: "The Buster Bundle",
    description: "The ultimate collection. Includes high-quality graphic tee, Buster's iconic sunglasses, and a signed Thank You card.",
    url: "https://savebuster.store/products/buster-bundle",
    image: "https://i.ibb.co/G3JGrykc/IMG-4175.jpg",
    tag: "Limited Edition",
    isFeatured: true
  },
  {
    id: "mopped-tee",
    name: "Mopped Heavyweight Boxy Tee",
    url: "https://mopped.store/en-mxn/products/mopped-heavyweight-boxy-tee",
    image: "https://i.ibb.co/tTDjgvhM/IMG-4176.jpg",
    tag: "New Arrival"
  }
];

export const IMPACT_STATS: StatItem[] = [
  { id: '1', label: 'Total Views', value: '250M+', description: 'Across all channels' },
  { id: '2', label: 'Sites Crashed', value: '1', description: 'RIP Talkomatic' },
  { id: '3', label: 'Subscribers', value: '1.57M', description: 'Growing daily' },
  { id: '4', label: 'Fake Personas', value: '12+', description: 'Undetected by fans' },
];

export const VIRAL_SHORTS: ShortVideo[] = [
  { id: "jV5ai2F5SCE", title: "i copied airrack's instagram", link: "https://www.youtube.com/shorts/jV5ai2F5SCE" },
  { id: "aorZej13SLE", title: "AI youtubers order a pizza", link: "https://www.youtube.com/shorts/aorZej13SLE" },
  { id: "sU9SptXFdvg", title: "i copied ryan's instagram", link: "https://www.youtube.com/shorts/sU9SptXFdvg" },
  { id: "9MYwAwTtWeI", title: "my dad needs vbucks", link: "https://www.youtube.com/shorts/9MYwAwTtWeI" },
  { id: "2a9gKDmtT0k", title: "how i avoid copyright", link: "https://www.youtube.com/shorts/2a9gKDmtT0k" },
  { id: "Gi2oubu0TU0", title: "what does mop mean?", link: "https://www.youtube.com/shorts/Gi2oubu0TU0" },
  { id: "0knQL-8mS5s", title: "making my grandpa proud", link: "https://www.youtube.com/shorts/0knQL-8mS5s" },
  { id: "LuIh97oVRAs", title: "going viral on a furry app", link: "https://www.youtube.com/shorts/LuIh97oVRAs" },
  { id: "vG_8AvaothM", title: "i made a viral AI kanye song", link: "https://www.youtube.com/shorts/vG_8AvaothM" },
  { id: "MsyWB8mLi-0", title: "meet april isabella", link: "https://www.youtube.com/shorts/MsyWB8mLi-0" },
  { id: "OyCRbxCArgI", title: "i started a viral copypasta", link: "https://www.youtube.com/shorts/OyCRbxCArgI" },
  { id: "DE7r0gz8FW0", title: "100,000 subscribers in 30 days", link: "https://www.youtube.com/shorts/DE7r0gz8FW0" },
  { id: "vElkxjvi4S8", title: "self promoting in public (Day 28)", link: "https://www.youtube.com/shorts/vElkxjvi4S8" },
  { id: "N8Qf4Rix2wU", title: "i became a vlogger for 24 hours (Day 27)", link: "https://www.youtube.com/shorts/N8Qf4Rix2wU" },
  { id: "lxyfK-zVP54", title: "reacting to your videos with #savebrian (Day 26)", link: "https://www.youtube.com/shorts/lxyfK-zVP54" },
  { id: "2VLXsHaOXmA", title: "i became a sigma for 24 hours (Day 25)", link: "https://www.youtube.com/shorts/2VLXsHaOXmA" },
  { id: "seH6fEROvdw", title: "i made a podcast (Day 24)", link: "https://www.youtube.com/shorts/seH6fEROvdw" },
  { id: "krwM-qQDVAQ", title: "i made my own youtube rewind (Day 23)", link: "https://www.youtube.com/shorts/krwM-qQDVAQ" }
];

export const SPEEDRUN_CHALLENGES: SpeedrunChallenge[] = [
  {
    id: "speedrun-1",
    title: "Project: 10 Days",
    goal: "0 to 100k Subs",
    timeframe: "10 Days",
    result: "Success (Day 10)",
    color: "bg-blue-600"
  },
  {
    id: "speedrun-2",
    title: "Project: Shorts",
    goal: "0 to 100k Subs",
    timeframe: "30 Days",
    result: "Success (Day 28)",
    color: "bg-red-600"
  },
  {
    id: "speedrun-3",
    title: "Project: Talkomatic",
    goal: "Crash the App",
    timeframe: "24 Hours",
    result: "Site Offline",
    color: "bg-purple-600"
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: "2020",
    title: "The Beginning",
    description: "Started creating experimental content and tricking the internet.",
    icon: "Rocket"
  },
  {
    year: "2021",
    title: "First Viral Hit",
    description: "Videos started gaining millions of views through algorithm manipulation tests.",
    icon: "Zap"
  },
  {
    year: "2023",
    title: "Talkomatic Crash",
    description: "Accidentally took down the oldest chat site on the internet with a traffic spike.",
    icon: "AlertTriangle"
  },
  {
    year: "2024",
    title: "0 to 100K",
    description: "Successfully built a channel from scratch in under 30 days using Shorts.",
    icon: "Trophy"
  },
  {
    year: "2025",
    title: "1.57 Million",
    description: "Dominating the niche with 250M+ total views and counting.",
    icon: "Star"
  }
];
