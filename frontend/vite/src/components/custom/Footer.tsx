import { Link } from "react-router-dom";
import { FaDiscord, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";

const sections = [
  {
    title: "Features",
    links: [
      { name: "Image Generation", href: "/features#image-generation" },
      { name: "Prompt Suggestions", href: "/features#prompt-suggestions" },
      { name: "Batch Processing", href: "/features#batch" },
      { name: "Style Presets", href: "/features#styles" },
    ],
  },
  {
    title: "Legal & Info",
    links: [
      { name: "Terms of Service", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "About Developer", href: "/about" },
      { name: "Documentation", href: "/docs" },
    ],
  },
];

const socialLinks = [
  {
    icon: FaTwitter,
    href: "https://twitter.com/yourusername",
    label: "Twitter",
  },
  { icon: FaGithub, href: "https://github.com/yourusername", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/yourusername",
    label: "LinkedIn",
  },
  { icon: FaDiscord, href: "https://discord.gg/yourserver", label: "Discord" },
];

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Features and Legal Sections */}
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>

            {/* Developer Info */}
            <div className="mt-8">
              <p className="text-sm text-gray-600">
                Developed with ❤️ by{""}
                <Link
                  to="/about"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  {" "}
                  Prabhjot
                </Link>
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Copyright */}
        <div className="text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Pictora.ai . All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
