import { CheckCircle } from 'lucide-react';
import { useState } from 'react';

interface PreferencesScreenProps {
  onComplete: () => void;
}

export function PreferencesScreen({ onComplete }: PreferencesScreenProps) {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [experienceLevel, setExperienceLevel] = useState<string>('');

  const interests = ['Finance', 'Tech', 'Sports', 'Politics', 'Health', 'Entertainment'];
  const levels = ['Beginner', 'Intermediate', 'Expert'];

  const toggleInterest = (interest: string) => {
    setSelectedInterests(prev =>
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Welcome to NewsLens AI
          </h1>
          <p className="text-muted-foreground">Personalize your news experience</p>
        </div>

        <div className="bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-lg">
          <div className="mb-8">
            <h3 className="font-semibold mb-4">Select Your Interests:</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {interests.map((interest) => (
                <button
                  key={interest}
                  onClick={() => toggleInterest(interest)}
                  className={`relative px-4 py-3 rounded-lg border-2 transition-all ${
                    selectedInterests.includes(interest)
                      ? 'border-blue-600 bg-blue-50 dark:bg-blue-950/30'
                      : 'border-border hover:border-blue-400'
                  }`}
                >
                  {selectedInterests.includes(interest) && (
                    <CheckCircle className="w-5 h-5 text-blue-600 absolute top-2 right-2" />
                  )}
                  <span className="font-medium">{interest}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-semibold mb-4">Experience Level:</h3>
            <div className="space-y-3">
              {levels.map((level) => (
                <button
                  key={level}
                  onClick={() => setExperienceLevel(level)}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all text-left ${
                    experienceLevel === level
                      ? 'border-blue-600 bg-blue-50 dark:bg-blue-950/30'
                      : 'border-border hover:border-blue-400'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{level}</span>
                    {experienceLevel === level && (
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={onComplete}
            disabled={selectedInterests.length === 0 || !experienceLevel}
            className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
          >
            Continue to NewsLens AI
          </button>
        </div>
      </div>
    </div>
  );
}
