import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ImageIcon, DownloadIcon, Wand2, Sparkles, Image } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PROMPT_SUGGESTIONS = [
  "A magical forest at sunset with glowing mushrooms",
  "A futuristic cityscape with flying cars and neon lights",
  "A cute red panda wearing a space suit",
  "An underwater palace made of coral and crystals",
  "A steampunk-themed coffee shop",
  "A fluorescent jellyfish playing a saxophone in a zero-gravity disco inside a black hole",
  "A giraffe wearing sunglasses piloting a hot air balloon shaped like a donut over a volcano",
  "A time-traveling toaster teaching philosophy to a council of alien cats",
  "A massive sentient popsicle leading a rebellion against refrigerators in a post-apocalyptic kitchen",
  "A snail in a spacesuit planting a flag on a glowing moon made entirely of cheese-flavored popcorn",
  "An intergalactic art gallery where paintings come alive and argue with the viewers",
  "A robot chef creating a seven-course meal from stardust and meteor fragments on a comet",
  "A mushroom civilization hosting a peace conference with talking clouds and sentient rivers",
  "A punk-rock unicorn DJing at an underwater rave attended by mermaids and sharks in sunglasses",
  "A cyborg otter inventing a perpetual motion machine while juggling holographic fish",
  "A medieval knight trapped in a VR game, fighting pixelated dragons while riding a hoverboard",
  "A sentient piano performing a symphony on a floating stage above a planet-sized bonsai tree",
  "A giant turtle orbiting Saturn, carrying an entire city on its shell powered by cosmic energy",
  "A cosmic librarian organizing black hole archives while sipping coffee from a cup made of stars",
  "A cactus band performing heavy metal on a desert planet with a crowd of sentient tumbleweeds moshing",
  "A superhero sloth saving a city in slow motion as everyone cheers in frustration and awe",
  "A carnival inside a massive jellybean, featuring rides that launch you into dreams",
  "A detective platypus solving crimes in a city where gravity randomly changes direction",
  "A sentient lava lamp negotiating peace between robots and plants in a futuristic greenhouse",
  "A glass bottle floating in space containing a miniature opera performed by singing fireflies",
  "A cozy library in a treehouse during rainfall",
  "A dragon made entirely of clouds in a sunset sky",
  "A cyberpunk street market at night",
  "A floating island with waterfalls and rainbows",
  "A mystical garden with bioluminescent plants",
  "An ancient temple hidden in mountain peaks",
  "A robot having a tea party with animals",
];

const HomePage = () => {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentSuggestion, setCurrentSuggestion] = useState("");
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  const getRandomSuggestion = () => {
    const suggestion =
      PROMPT_SUGGESTIONS[Math.floor(Math.random() * PROMPT_SUGGESTIONS.length)];
    return suggestion;
  };

  const typeOutSuggestion = (suggestion: string) => {
    let index = 0;
    const typeChar = () => {
      if (index < suggestion.length) {
        setCurrentSuggestion(suggestion.slice(0, index + 1));
        index++;
        setTypingTimeout(setTimeout(typeChar, 50));
      }
    };
    typeChar();
  };

  useEffect(() => {
    typeOutSuggestion(getRandomSuggestion());
    return () => {
      if (typingTimeout) clearTimeout(typingTimeout);
    };
  }, []);

  const refreshSuggestion = () => {
    if (typingTimeout) clearTimeout(typingTimeout);
    setCurrentSuggestion("");
    setTimeout(() => {
      typeOutSuggestion(getRandomSuggestion());
    }, 100);
  };

  const generateImage = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "http://192.168.29.192:8000/generate-image/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt, censored: true }),
        }
      );

      if (response.ok) {
        const blob = await response.blob();
        const imageObjectURL = URL.createObjectURL(blob);
        setImageUrl(imageObjectURL);
      } else {
        setError("Image generation failed. Try a different prompt.");
      }
    } catch (err) {
      setError("Error generating image. Check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 flex flex-col items-center justify-center gap-3">
            <ImageIcon className="h-8 w-8 text-primary" />
            Crafting Stunning Visuals
          </h2>
          <p className="max-w-2xl mx-auto">
            Transform your ideas into stunning images with our AI-powered image
            generator. Just describe what you want to see.
          </p>
        </div>

        {/* Suggestion Section */}
        <Card className="mb-4 bg-primary/5">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-blue-600">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm">Need inspiration?</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => refreshSuggestion()}
                className="text-blue-600 hover:text-blue-700 hover:bg-blue-100"
              >
                Try another
              </Button>
            </div>
            <p
              className="mt-2 text-blue-800 cursor-pointer hover:text-blue-900 transition-colors"
              onClick={() => setPrompt(currentSuggestion)}
            >
              {currentSuggestion || "Loading suggestion..."}
            </p>
          </CardContent>
        </Card>

        {/* Input Section */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe the image you want to generate..."
                className="flex-grow"
              />
              <Button
                onClick={generateImage}
                disabled={loading || !prompt}
                className="sm:w-auto w-full"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Generating...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Wand2 className="h-4 w-4" />
                    Generate
                  </span>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Result output Section */}
        <div className="space-y-6">
         <p className="text-sm font-medium text-muted-foreground">Wait for a while! we&apos;re generating image, it takes around 12 minutes.</p>
          {loading && (
            <Card>
              <CardContent className="pt-6 relative">
                <Skeleton className="h-64 w-full rounded-sm" />
                <Image
                  strokeWidth={1}
                  size={80}
                  className="text-primary/30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
                />
              </CardContent>
            </Card>
          )}

          {imageUrl && !loading && (
            <Card className="overflow-hidden">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center gap-4">
                  <img
                    src={imageUrl}
                    alt="Generated"
                    className="w-full rounded-lg shadow-lg transition-transform hover:scale-[1.02]"
                  />
                  <Button
                    variant="outline"
                    asChild
                    className="w-full sm:w-auto"
                  >
                    <a
                      href={imageUrl}
                      download="generated_image.png"
                      className="flex items-center gap-2"
                    >
                      <DownloadIcon className="h-4 w-4" />
                      Download Image
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {error && (
            <Card className="border-red-500 bg-background">
              <CardContent className="pt-6">
                <p className="text-red-600 text-center">{error}</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
