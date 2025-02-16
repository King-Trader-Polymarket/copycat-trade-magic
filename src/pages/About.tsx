
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
      color: "text-[#0077B5] hover:text-[#0077B5]/80",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "#",
      color: "text-[#1DA1F2] hover:text-[#1DA1F2]/80",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "#",
      color: "text-[#E4405F] hover:text-[#E4405F]/80",
    },
    {
      name: "Telegram",
      icon: MessageCircle,
      href: "#",
      color: "text-[#0088cc] hover:text-[#0088cc]/80",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:your.email@example.com",
      color: "text-primary hover:text-primary/80",
    },
  ];

  return (
    <div className="page-background about-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold gradient-text title-animation mb-4">
            Connect With Us
          </h1>
          <p className="text-muted-foreground">
            Join our community of successful traders
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
                className="group transform transition-all duration-300 hover:scale-105"
              >
                <Button
                  variant="outline"
                  className="w-full h-24 flex flex-col items-center justify-center space-y-2 transition-all glass"
                >
                  <link.icon className={`h-8 w-8 ${link.color} transition-colors`} />
                  <span className="text-sm font-medium">{link.name}</span>
                </Button>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 glass p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold gradient-text">Our Mission</h2>
              <p className="text-muted-foreground">
                To democratize trading by providing cutting-edge copy trading technology
                that allows anyone to benefit from the expertise of top traders.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold gradient-text">Why Choose Us</h2>
              <p className="text-muted-foreground">
                Advanced algorithms, transparent performance tracking, and a
                community of successful traders make us the premier choice for copy
                trading.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
