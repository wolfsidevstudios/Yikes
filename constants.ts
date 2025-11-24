import { CreatorStats, SocialProfile, Video, Product } from './types';

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
