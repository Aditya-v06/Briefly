import { useState, useRef } from 'react';
import { Play, Pause, Clock, ExternalLink } from 'lucide-react';

interface AudioStory {
  id: string;
  title: string;
  category: string;
  duration: string;
  audioUrl: string;
  source: string;
  sourceUrl: string;
  summary: string;
}

const mockAudioStories: AudioStory[] = [
  {
    id: '1',
    title: 'RBI Increases Interest Rates to Control Inflation',
    category: 'Finance',
    duration: '5:30',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    source: 'Economic Times',
    sourceUrl: 'https://economictimes.com',
    summary: 'Central bank raises repo rate by 0.25% in third consecutive hike this year'
  },
  {
    id: '2',
    title: 'Tech Giants Announce AI Partnership',
    category: 'Tech',
    duration: '4:15',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    source: 'TechCrunch',
    sourceUrl: 'https://techcrunch.com',
    summary: 'Major technology companies join forces to develop responsible AI frameworks'
  },
  {
    id: '3',
    title: 'Global Markets React to Economic Data',
    category: 'Finance',
    duration: '6:00',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    source: 'Bloomberg',
    sourceUrl: 'https://bloomberg.com',
    summary: 'Stock markets show mixed response to latest GDP figures'
  },
  {
    id: '4',
    title: 'Climate Summit Reaches Historic Agreement',
    category: 'Environment',
    duration: '7:20',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    source: 'Reuters',
    sourceUrl: 'https://reuters.com',
    summary: 'World leaders commit to ambitious carbon reduction targets'
  }
];

interface AudioSectionProps {
  onBack: () => void;
}

export function AudioSection({ onBack }: AudioSectionProps) {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement }>({});

  const togglePlay = (id: string) => {
    const audio = audioRefs.current[id];

    if (currentlyPlaying === id) {
      audio?.pause();
      setCurrentlyPlaying(null);
    } else {
      // Pause all other audios
      Object.entries(audioRefs.current).forEach(([key, audioEl]) => {
        if (key !== id && audioEl) {
          audioEl.pause();
          audioEl.currentTime = 0;
        }
      });

      audio?.play();
      setCurrentlyPlaying(id);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Audio Stories</h1>
          <p className="text-muted-foreground">Listen to news like audiobooks on the go</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockAudioStories.map((story) => (
            <div
              key={story.id}
              className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <button
                  onClick={() => togglePlay(story.id)}
                  className="flex-shrink-0 w-16 h-16 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
                >
                  {currentlyPlaying === story.id ? (
                    <Pause className="w-8 h-8 text-white" />
                  ) : (
                    <Play className="w-8 h-8 text-white ml-1" />
                  )}
                </button>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs font-medium">
                      {story.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {story.duration}
                    </div>
                  </div>

                  <h3 className="font-semibold mb-2 line-clamp-2">{story.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {story.summary}
                  </p>

                  <a
                    href={story.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Source: {story.source}
                  </a>

                  <audio
                    ref={(el) => {
                      if (el) audioRefs.current[story.id] = el;
                    }}
                    src={story.audioUrl}
                    onEnded={() => setCurrentlyPlaying(null)}
                  />
                </div>
              </div>

              {currentlyPlaying === story.id && (
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400">
                    <div className="flex gap-1">
                      <div className="w-1 h-4 bg-blue-600 animate-pulse" />
                      <div className="w-1 h-4 bg-blue-600 animate-pulse delay-75" />
                      <div className="w-1 h-4 bg-blue-600 animate-pulse delay-150" />
                    </div>
                    Now playing...
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}