const PrivacyPage = () => {
    return (
      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-background">
        <h1 className="font-bold text-3xl mb-6">Privacy Policy</h1>
  
        <p className="text-lg mb-6">
          At our AI Image Generator project, we prioritize your privacy. This Privacy Policy explains how we handle your data when you use the tool.
          Since this project is open-source, we do not collect or store any personal data by default. However, it’s important to understand the privacy aspects of using the tool.
        </p>
  
        <div className="space-y-12">
          <div>
            <h2 className="font-semibold text-2xl mb-3">1. Data Collection</h2>
            <p className="text-lg leading-relaxed mb-6">
              As an open-source project, our AI Image Generator does not collect personal information from its users. We do not track your usage or collect any identifiable data unless explicitly stated.
              However, please be aware that if you use third-party services or APIs (for example, cloud storage or third-party image processing), they may have their own privacy policies regarding the data you upload.
            </p>
          </div>
  
          <div>
            <h2 className="font-semibold text-2xl mb-3">2. Data You Provide</h2>
            <p className="text-lg leading-relaxed mb-6">
              The only data we might handle is the content you provide (e.g., image generation prompts or images). This data is processed locally on your device and is not stored or shared by us unless you explicitly share it for feedback or public use.
              It’s important to remember that any personal information or sensitive content you include in your prompts should be handled carefully.
            </p>
          </div>
  
          <div>
            <h2 className="font-semibold text-2xl mb-3">3. Third-Party Services</h2>
            <p className="text-lg leading-relaxed mb-6">
              If you use third-party services or APIs as part of your workflow (e.g., for cloud storage, or sharing generated images), please review their privacy policies.
              These services may collect personal data or store content on their servers. We are not responsible for how these third-party services handle your data.
            </p>
          </div>
  
          <div>
            <h2 className="font-semibold text-2xl mb-3">4. Data Security</h2>
            <p className="text-lg leading-relaxed mb-6">
              Since this project is open-source and runs locally on your machine, the security of your data depends on the environment you run it in.
              We recommend that you take appropriate security precautions if you are storing, sharing, or processing sensitive content. This may include using secure networks or encryption when transmitting data to third-party services.
            </p>
          </div>
  
          <div>
            <h2 className="font-semibold text-2xl mb-3">5. Your Rights</h2>
            <p className="text-lg leading-relaxed mb-6">
              As we do not collect any personal data, there are no personal data rights such as data access or deletion for us to manage. 
              However, if you share generated content publicly, you retain the rights to your creations. If you wish to delete content or stop using third-party services, you can do so directly with those services.
            </p>
          </div>
  
          <div>
            <h2 className="font-semibold text-2xl mb-3">6. Changes to This Privacy Policy</h2>
            <p className="text-lg leading-relaxed mb-6">
              This Privacy Policy may be updated from time to time to reflect changes in the project or third-party services we integrate with.
              We encourage you to review this page periodically for any updates. Changes to the policy will be reflected here.
            </p>
          </div>
  
          <div>
            <h2 className="font-semibold text-2xl mb-3">7. Contact Us</h2>
            <p className="text-lg leading-relaxed mb-6">
              If you have any questions or concerns about this Privacy Policy, please feel free to contact us. We are committed to ensuring that your privacy is respected.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default PrivacyPage;
  