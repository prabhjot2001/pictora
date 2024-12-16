import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const FeaturesPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <h1 className="font-bold text-3xl mb-6">Features</h1>

      <div className="space-y-12">
        <div id="image-generation">
          <h2 className="font-semibold text-2xl mb-3">Image Generation</h2>
          <p className="text-lg leading-relaxed mb-6">
            The Image Generation feature allows you to create high-quality images from text prompts.
            You can specify the style, color palette, and other parameters to generate visuals that match your exact specifications.
            This feature is powered by advanced AI models that are capable of understanding a wide range of textual descriptions.
          </p>
        </div>

        <div id="prompt-suggestions">
          <h2 className="font-semibold text-2xl mb-3">Prompt Suggestions</h2>
          <p className="text-lg leading-relaxed mb-6">
            With Prompt Suggestions, you can get suggestions on how to refine your input prompt.
            This feature analyzes the context of your request and provides optimized prompt suggestions that help you generate better and more accurate results,
            whether you're creating artwork, illustrations, or designs.
          </p>
        </div>

        <div id="batch">
          <h2 className="font-semibold text-2xl mb-3">Batch Processing</h2>
          <p className="text-lg leading-relaxed mb-6">
            Batch Processing allows you to generate multiple images or prompts at once. This is perfect for users who need to create large amounts of content quickly.
            Instead of manually processing each request one by one, you can queue multiple tasks for efficient batch execution, saving time and effort in your creative workflow.
          </p>
        </div>

        <div id="styles">
          <h2 className="font-semibold text-2xl mb-3">Style Presets</h2>
          <p className="text-lg leading-relaxed mb-6">
            Style Presets give you the ability to apply predefined styles to your generated images.
            Whether you're looking for a vintage aesthetic, a modern minimalistic look, or anything in between, Style Presets make it easy to experiment with different artistic styles without having to manually tweak the settings each time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
