import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Sparkles, Video, Heart, Zap, Shield } from "lucide-react";
import heroImage from "@/assets/hero-twinlive.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="TwinLive streaming experience" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Sparkles className="w-4 h-4 text-primary animate-pulse-glow" />
              <span className="text-sm font-medium text-primary">Never Stream Alone</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Go Live Together.
              </span>
              <br />
              <span className="text-foreground">Connect Deeper.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              TwinLive is the social platform where every live session is paired. 
              Match by interest, energy, or purpose — and create magic together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" className="text-lg px-8 shadow-glow hover:scale-105 transition-transform">
                Get Started <Zap className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 hover:bg-primary/5">
                Watch Demo <Video className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How <span className="text-primary">TwinLive</span> Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Three simple steps to connect with your streaming twin
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Choose Your Vibe",
                description: "Select your interests, mood, and what you want to talk about",
                icon: Heart,
              },
              {
                step: "02",
                title: "Get Matched",
                description: "Our algorithm pairs you with someone who shares your energy",
                icon: Users,
              },
              {
                step: "03",
                title: "Go Live Together",
                description: "Start streaming as a duo and build genuine connections",
                icon: Video,
              },
            ].map((item, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-glow transition-all duration-300">
                <div className="absolute top-0 right-0 text-8xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                  {item.step}
                </div>
                <CardContent className="p-8 relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-hero flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why <span className="text-primary">TwinLive</span>?
            </h2>
            <p className="text-lg text-muted-foreground">
              Experience streaming like never before with features designed for connection
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Smart Matching",
                description: "Advanced algorithm matches you with compatible partners based on interests and energy",
                icon: Sparkles,
                gradient: "from-primary to-accent",
              },
              {
                title: "Always Together",
                description: "No solo streams here — every session is a duo experience built for authentic connection",
                icon: Users,
                gradient: "from-secondary to-primary",
              },
              {
                title: "Safe & Moderated",
                description: "Community guidelines and AI moderation ensure positive, respectful interactions",
                icon: Shield,
                gradient: "from-accent to-secondary",
              },
              {
                title: "Instant Connection",
                description: "Start streaming in seconds — no waiting rooms, no scheduling hassles",
                icon: Zap,
                gradient: "from-primary to-secondary",
              },
              {
                title: "Engaging Format",
                description: "Interactive features and real-time reactions keep viewers engaged",
                icon: Heart,
                gradient: "from-secondary to-accent",
              },
              {
                title: "Build Your Tribe",
                description: "Turn great matches into lasting connections and grow your community",
                icon: Video,
                gradient: "from-accent to-primary",
              },
            ].map((feature, index) => (
              <Card key={index} className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold">
              Ready to Find Your <br />
              <span className="bg-gradient-hero bg-clip-text text-transparent">Streaming Twin?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of creators building authentic connections through paired live streaming
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" className="text-lg px-8 shadow-glow hover:scale-105 transition-transform">
                Start Streaming <Video className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 hover:bg-primary/5">
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              TwinLive
            </h3>
            <p className="text-muted-foreground">
              Go Live Together. Connect Deeper.
            </p>
            <p className="text-sm text-muted-foreground">
              Made and coded by Gerald Mbanga
            </p>
            <p className="text-sm text-muted-foreground">
              © 2024 TwinLive. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
