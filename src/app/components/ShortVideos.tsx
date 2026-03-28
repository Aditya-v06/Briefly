import { useState, useRef, useEffect } from 'react';
import { ChevronUp, ChevronDown, Volume2, VolumeX, ExternalLink, X } from 'lucide-react';

interface VideoStory {
  id: string;
  title: string;
  category: string;
  videoUrl: string;
  source: string;
  sourceUrl: string;
}

const mockVideoStories: VideoStory[] = [
  {
    id: '1',
    title: 'RBI Interest Rate Hike Explained',
    category: 'Finance',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    source: 'Economic Times',
    sourceUrl: 'https://economictimes.com'
  },
  {
    id: '2',
    title: 'Tech Giants AI Partnership',
    category: 'Tech',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    source: 'TechCrunch',
    sourceUrl: 'https://techcrunch.com'
  },
  {
    id: '3',
    title: 'Global Climate Summit Updates',
    category: 'Environment',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    source: 'Reuters',
    sourceUrl: 'https://reuters.com'
  }
];

interface ShortVideosProps {
  onBack: () => void;
}

export function ShortVideos({ onBack }: ShortVideosProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [muted, setMuted] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    // Auto-play current video
    const currentVideo = videoRefs.current[currentIndex];
    if (currentVideo) {
      currentVideo.play();
    }

    // Pause other videos
    videoRefs.current.forEach((video, index) => {
      if (video && index !== currentIndex) {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [currentIndex]);

  const handleNext = () => {
    if (currentIndex < mockVideoStories.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const currentStory = mockVideoStories[currentIndex];

  return (
    <div className="fixed inset-0 bg-black z-50">
      <div className="relative h-full flex items-center justify-center">
        <button
          onClick={onBack}
          className="absolute top-4 left-4 z-10 p-3 bg-black/50 text-white rounded-full backdrop-blur-sm hover:bg-black/70 transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="relative w-full max-w-md h-full">
          {mockVideoStories.map((story, index) => (
            <div
              key={story.id}
              className={`absolute inset-0 transition-opacity duration-300 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={story.videoUrl}
                className="w-full h-full object-cover"
                loop
                muted={muted}
                playsInline
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <span className="inline-block px-2 py-1 bg-blue-600 text-white rounded text-xs font-medium mb-2">
                  {story.category}
                </span>
                <h2 className="text-white text-xl font-bold mb-2">{story.title}</h2>
                <a
                  href={story.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/80 text-sm hover:text-white transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Source: {story.source}
                </a>
              </div>
            </div>
          ))}

          <button
            onClick={() => setMuted(!muted)}
            className="absolute top-4 right-4 z-10 p-3 bg-black/50 text-white rounded-full backdrop-blur-sm hover:bg-black/70 transition-colors"
          >
            {muted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
          </button>

          {currentIndex > 0 && (
            <button
              onClick={handlePrevious}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[200px] p-3 bg-black/50 text-white rounded-full backdrop-blur-sm hover:bg-black/70 transition-colors"
            >
              <ChevronUp className="w-6 h-6" />
            </button>
          )}

          {currentIndex < mockVideoStories.length - 1 && (
            <button
              onClick={handleNext}
              className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-[200px] p-3 bg-black/50 text-white rounded-full backdrop-blur-sm hover:bg-black/70 transition-colors"
            >
              <ChevronDown className="w-6 h-6" />
            </button>
          )}

          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
            {mockVideoStories.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}