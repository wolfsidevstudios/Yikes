
export interface Video {
  id: string;
  title: string;
  views: string;
  thumbnailUrl: string;
  link: string;
}

export interface SocialProfile {
  platform: string;
  handle: string;
  url: string;
  icon: 'youtube' | 'instagram' | 'tiktok' | 'twitter' | 'discord';
}

export interface CreatorStats {
  subscribers: string;
  niche: string[];
  location: string;
  spouse: string;
  realName: string;
  bio: string;
}

export interface Product {
  id: string;
  name: string;
  description?: string;
  url: string;
  image: string;
  tag?: string;
  isFeatured?: boolean;
}

export interface ShortVideo {
  id: string;
  title: string;
  link: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: string;
  description: string;
}

export interface AIExperimentState {
  prompt: string;
  result: string | null;
  isLoading: boolean;
  error: string | null;
}

export interface SpeedrunChallenge {
  id: string;
  title: string;
  goal: string;
  timeframe: string;
  result: string;
  color: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon?: string;
}

export interface DictionaryTerm {
  term: string;
  phonetic: string;
  partOfSpeech: string;
  definition: string;
  example: string;
}

export interface FanReaction {
  id: string;
  user: string;
  source: string;
  avatarColor: string;
  text: string;
  likes: string;
}
