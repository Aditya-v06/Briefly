import { ArrowLeft, Download, Play, Share2 } from 'lucide-react';

interface VideoScreenProps {
  onBack: () => void;
}

export function VideoScreen({ onBack }: VideoScreenProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>

        <h1 className="text-2xl sm:text-3xl font-bold mb-6">AI Video Summary</h1>

        <div className="bg-card rounded-2xl overflow-hidden border border-border mb-6">
          <div className="aspect-video bg-black flex items-center justify-center relative">
            <video
              className="w-full h-full"
              controls
              poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450'%3E%3Crect width='800' height='450' fill='%23000'/%3E%3C/svg%3E"
            >
              <source
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            Download
          </button>
          <button className="px-6 py-3 bg-accent hover:bg-muted rounded-lg transition-colors flex items-center gap-2">
            <Share2 className="w-4 h-4" />
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
