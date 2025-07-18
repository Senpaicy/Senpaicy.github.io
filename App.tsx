import image_44a6ba261837fe22898f7ac0d21476d40d8609ad from "figma:asset/44a6ba261837fe22898f7ac0d21476d40d8609ad.png";
import React, { useState, useEffect } from "react";
import { Card } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { Separator } from "./components/ui/separator";
import { HobbyCard } from "./components/HobbyCard";
import { SkillHexagon } from "./components/SkillHexagon";
import { CustomCarousel } from "./components/CustomCarousel";
import {
  Heart,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Code,
  Palette,
  Camera,
  BookOpen,
  Gamepad2,
  Music,
  Mountain,
  Coffee,
} from "lucide-react";
import wavingImage from "figma:asset/ba6dc832525dcfe138c909310839fddf8749b912.png";
import gardeningImage from "figma:asset/6677674d68f2614a9ac53bf9c063a9658163be09.png";
import fishingImage from "figma:asset/62835e6566f8ef04bc8ec0cab9923f23fe080861.png";
import characterImage from "figma:asset/120435bfab2f8bf347502e391d9ea8ee9dc070c2.png";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll detection for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "hobbies",
        "projects",
        "skills",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100; // Offset for fixed nav

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetBottom
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    {
      name: "React",
      level: 95,
      category: "Frontend",
      isStrong: true,
    },
    {
      name: "Python",
      level: 90,
      category: "Programming",
      isStrong: true,
    },
    {
      name: "UI/UX Design",
      level: 88,
      category: "Design",
      isStrong: true,
    },
    { name: "TypeScript", level: 85, category: "Programming" },
    { name: "Node.js", level: 80, category: "Backend" },
    { name: "Adobe", level: 75, category: "Design" },
  ];

  const projects = [
    {
      title: "Bear Weather App",
      description:
        "A cute weather application with bear-themed animations and cozy UI design.",
      tech: ["React", "TypeScript", "Weather API"],
      link: "#",
    },
    {
      title: "Forest Blog Platform",
      description:
        "A nature-inspired blogging platform with earthy tones and organic layouts.",
      tech: ["Next.js", "MDX", "Tailwind CSS"],
      link: "#",
    },
    {
      title: "Cozy Task Manager",
      description:
        "A warm and friendly task management app designed for comfort and productivity.",
      tech: ["Vue.js", "Firebase", "PWA"],
      link: "#",
    },
  ];

  const hobbies = [
    {
      name: "Gardening",
      type: "Nature",
      level: 85,
      description:
        "Growing beautiful plants and creating peaceful garden spaces",
      image: gardeningImage,
      rarity: "epic" as const,
      stats: {
        moneyMaking: 30,
        intelligence: 60,
        healthy: 90,
        relaxing: 95,
        creativity: 75,
      },
    },
    {
      name: "Fishing",
      type: "Recreation",
      level: 78,
      description:
        "Peaceful moments by the water, waiting for the perfect catch",
      image: fishingImage,
      rarity: "rare" as const,
      stats: {
        moneyMaking: 45,
        intelligence: 55,
        healthy: 70,
        relaxing: 95,
        creativity: 60,
      },
    },
    {
      name: "Photography",
      type: "Art",
      level: 80,
      description:
        "Capturing life's beautiful moments through the lens",
      image: characterImage,
      imagePosition: "left center",
      rarity: "rare" as const,
      stats: {
        moneyMaking: 65,
        intelligence: 70,
        healthy: 40,
        relaxing: 60,
        creativity: 95,
      },
    },
    {
      name: "Coding",
      type: "Tech",
      level: 92,
      description:
        "Building digital experiences that bring joy to users",
      image: characterImage,
      imagePosition: "right center",
      rarity: "legendary" as const,
      stats: {
        moneyMaking: 95,
        intelligence: 90,
        healthy: 30,
        relaxing: 40,
        creativity: 85,
      },
    },
    {
      name: "Reading",
      type: "Knowledge",
      level: 82,
      description:
        "Exploring new worlds and ideas through books",
      image: characterImage,
      imagePosition: "center bottom",
      rarity: "rare" as const,
      stats: {
        moneyMaking: 25,
        intelligence: 95,
        healthy: 20,
        relaxing: 90,
        creativity: 80,
      },
    },
    {
      name: "Cooking",
      type: "Life",
      level: 70,
      description:
        "Creating delicious meals with love and creativity",
      image: characterImage,
      imagePosition: "left top",
      rarity: "common" as const,
      stats: {
        moneyMaking: 40,
        intelligence: 60,
        healthy: 85,
        relaxing: 80,
        creativity: 90,
      },
    },
    {
      name: "Hiking",
      type: "Adventure",
      level: 75,
      description:
        "Exploring nature trails and conquering mountain peaks",
      image: characterImage,
      imagePosition: "right top",
      rarity: "epic" as const,
      stats: {
        moneyMaking: 10,
        intelligence: 50,
        healthy: 95,
        relaxing: 85,
        creativity: 70,
      },
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-center">
            <div className="flex items-center space-x-2 bg-muted/50 rounded-full px-8 py-3">
              {[
                "home",
                "about",
                "hobbies",
                "projects",
                "skills",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`
                    px-4 py-2 rounded-full capitalize transition-all duration-300 text-sm
                    ${
                      activeSection === item
                        ? "bg-primary text-primary-foreground font-bold shadow-lg transform scale-105"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/80"
                    }
                  `}
                >
                  {item === "home" ? "Home" : item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Landing Section */}
      <section id="home" className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl tracking-tight">
                  Hello, I'm{" "}
                  <span className="text-primary">Bear</span> 🐻
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  A cozy creative who loves building delightful
                  digital experiences with warmth, care, and a
                  touch of whimsy.
                </p>
              </div>

              <div className="flex gap-4">
                <Button
                  onClick={() => scrollToSection("projects")}
                  className="bg-primary hover:bg-primary/90"
                >
                  View My Work
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection("contact")}
                >
                  Get In Touch
                </Button>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="gentle-float">
                <img
                  src={
                    image_44a6ba261837fe22898f7ac0d21476d40d8609ad
                  }
                  alt="Bear character waving hello"
                  className="w-full max-w-md rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section
        id="about"
        className="pt-24 pb-16 px-6 bg-muted/30"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground">
              Getting to know the bear behind the code
            </p>
          </div>

          <Card className="p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <p>
                  Hi there! I'm a passionate developer and
                  designer who believes that technology should
                  feel warm and welcoming. Like a cozy cabin in
                  the woods, I strive to create digital spaces
                  that feel safe, comfortable, and delightful to
                  explore.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring
                  nature trails, experimenting with new coffee
                  brewing methods, or curled up with a good
                  book. I bring this same sense of curiosity and
                  care to every project I work on.
                </p>
                <p>
                  My approach combines technical expertise with
                  an eye for design and a heart for user
                  experience. I believe the best interfaces are
                  the ones that feel so natural, you forget
                  you're using technology at all.
                </p>
              </div>

              <div className="flex justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                  <div className="text-6xl">🐻</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Hobbies Section - Pokemon Card Carousel */}
      <section id="hobbies" className="pt-24 pb-20 px-6">
        <div className="max-w-[1800px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">
              My Hobby Collection
            </h2>
            <p className="text-xl text-muted-foreground">
              Rare cards showcasing my bear adventures ✨
            </p>
          </div>

          <div className="px-20">
            <CustomCarousel className="w-full">
              {hobbies.map((hobby, index) => (
                <div
                  key={index}
                  className="flex justify-center"
                >
                  <HobbyCard
                    name={hobby.name}
                    type={hobby.type}
                    level={hobby.level}
                    stats={hobby.stats}
                    description={hobby.description}
                    image={hobby.image}
                    imagePosition={hobby.imagePosition}
                    rarity={hobby.rarity}
                  />
                </div>
              ))}
            </CustomCarousel>
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground">
              🐾 Click paw prints or use horizontal
              scroll/trackpad • Click cards to flip them!
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="pt-24 pb-16 px-6 bg-muted/30"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground">
              Some cozy creations I'm proud of
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Code className="w-12 h-12 text-primary/60" />
                </div>
                <div className="p-6">
                  <h3 className="mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section - Hexagon Layout */}
      <section id="skills" className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">
              Skills &amp; Expertise
            </h2>
            <p className="text-xl text-muted-foreground">
              My cozy workshop toolkit in hexagonal harmony
            </p>
          </div>

          <Card className="p-8 shadow-lg">
            <SkillHexagon skills={skills} />
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="pt-24 pb-16 px-6 bg-muted/30"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Let's Connect</h2>
            <p className="text-xl text-muted-foreground">
              Ready to create something cozy together?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>hello@bearportfolio.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Forest Grove, OR</span>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="flex space-x-4">
                <Button variant="outline" size="icon">
                  <Github className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 rounded-lg bg-input-background border border-border focus:border-primary focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 rounded-lg bg-input-background border border-border focus:border-primary focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full p-3 rounded-lg bg-input-background border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                <Heart className="w-3 h-3 text-primary-foreground" />
              </div>
              <span className="text-muted-foreground">
                Made with care and a little bit of bear magic
              </span>
            </div>

            <div className="text-sm text-muted-foreground">
              © 2025 Bear Portfolio. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}