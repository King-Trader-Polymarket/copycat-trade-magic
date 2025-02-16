
import {
  Linkedin,
  Mail,
  Instagram,
  Twitter,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "#",
      color: "text-[#0077B5]",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "#",
      color: "text-[#1DA1F2]",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "#",
      color: "text-[#E4405F]",
    },
    {
      name: "Telegram",
      icon: MessageCircle,
      href: "#",
      color: "text-[#0088cc]",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:your.email@example.com",
      color: "text-primary",
    },
  ];

  return (
    <div className="min-h-screen pt-16 pb-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold gradient-text title-animation mb-4">
            About Us
          </h1>
          <p className="text-muted-foreground">
            Connect with us and join our community
          </p>
        </div>

        <div className="glass p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Button
                  variant="outline"
                  className="w-full h-24 flex flex-col items-center justify-center space-y-2 transition-all hover:scale-105"
                >
                  <link.icon
                    className={`h-8 w-8 ${link.color} transition-colors`}
                  />
                  <span className="text-sm font-medium">{link.name}</span>
                </Button>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
