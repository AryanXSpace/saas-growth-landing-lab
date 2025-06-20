
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Check, Star, ArrowRight, Play, Shield, Users, TrendingUp, Clock, Zap, Target, BarChart3, Lock, Award, ChevronRight, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [userCount, setUserCount] = useState(0);
  const [emailCaptured, setEmailCaptured] = useState(false);
  const [email, setEmail] = useState("");
  const [showExitIntent, setShowExitIntent] = useState(false);
  const { toast } = useToast();

  // Animated counter for user statistics
  useEffect(() => {
    const timer = setInterval(() => {
      setUserCount(prev => {
        if (prev < 50000) return prev + 250;
        return 50000;
      });
    }, 50);
    return () => clearInterval(timer);
  }, []);

  // Exit intent detection
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !emailCaptured) {
        setShowExitIntent(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [emailCaptured]);

  const handleEmailSubmit = (e: React.FormEvent, isExitIntent = false) => {
    e.preventDefault();
    if (email) {
      setEmailCaptured(true);
      if (isExitIntent) setShowExitIntent(false);
      toast({
        title: "Success!",
        description: "Welcome to our beta program. Check your email for next steps.",
      });
      setEmail("");
    }
  };

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "VP of Marketing",
      company: "TechFlow Inc",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
      content: "This platform increased our conversion rates by 340% in just 3 months. The ROI is incredible.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "CEO",
      company: "GrowthCorp",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
      content: "We saved 15 hours per week on manual processes. The automation features are game-changing.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "Product Manager",
      company: "InnovateLab",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
      content: "The analytics dashboard gives us insights we never had before. Data-driven decisions made easy.",
      rating: 5
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Setup",
      description: "Get started in under 5 minutes with our one-click integration. No technical expertise required.",
      benefit: "Save 10+ hours of setup time"
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "AI-powered algorithms identify your highest-value prospects with 94% accuracy.",
      benefit: "Increase qualified leads by 3x"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Track performance metrics that matter with customizable dashboards and automated reports.",
      benefit: "Make data-driven decisions instantly"
    }
  ];

  const pricingFeatures = [
    "Unlimited campaigns",
    "Advanced analytics dashboard",
    "24/7 priority support",
    "Custom integrations",
    "White-label options",
    "Dedicated success manager"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Exit Intent Popup */}
      {showExitIntent && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="max-w-md w-full bg-white">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Wait! Don't Miss Out</h3>
                  <p className="text-gray-600 mt-1">Get 50% off your first month + exclusive bonus features</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowExitIntent(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <form onSubmit={(e) => handleEmailSubmit(e, true)} className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                  Claim 50% Discount Now
                </Button>
              </form>
              <p className="text-xs text-gray-500 mt-2">Limited time offer • No spam, unsubscribe anytime</p>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Target className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">ConvertPro</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Reviews</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">Pricing</a>
            </nav>
            <div className="flex items-center space-x-3">
              <Button variant="ghost" className="text-gray-700">Sign In</Button>
              <Button className="bg-blue-600 hover:bg-blue-700">Start Free Trial</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                🚀 New: AI-Powered Optimization Engine
              </Badge>
              
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Boost Your Conversions by{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    340%
                  </span>{" "}
                  in 30 Days
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Stop losing potential customers. Our AI-powered platform identifies exactly why visitors leave 
                  and automatically optimizes your funnel to maximize revenue.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
                  Start 14-Day Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-4" onClick={() => setIsVideoPlaying(true)}>
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo (2 min)
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>Setup in 5 minutes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white rounded-2xl shadow-2xl p-8">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop" 
                  alt="Dashboard Preview"
                  className="w-full rounded-lg"
                />
                {!isVideoPlaying && (
                  <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center">
                    <Button 
                      size="lg" 
                      className="bg-white/90 hover:bg-white text-gray-900"
                      onClick={() => setIsVideoPlaying(true)}
                    >
                      <Play className="mr-2 h-6 w-6" />
                      Play Demo
                    </Button>
                  </div>
                )}
              </div>
              
              {/* Floating Stats */}
              <Card className="absolute -left-6 top-6 bg-white shadow-lg border-0">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{userCount.toLocaleString()}+ Users</p>
                      <p className="text-xs text-gray-600">Active this month</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="absolute -right-6 bottom-6 bg-white shadow-lg border-0">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="h-8 w-8 text-green-600" />
                    <div>
                      <p className="text-lg font-bold text-gray-900">+340%</p>
                      <p className="text-xs text-gray-600">Avg. Conversion Increase</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-gray-600">Trusted by 50,000+ businesses worldwide</p>
          </div>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <Shield className="h-8 w-8" />
            <Award className="h-8 w-8" />
            <Lock className="h-8 w-8" />
            <Users className="h-8 w-8" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">Features</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Maximize Conversions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines AI-powered insights with proven conversion optimization techniques 
              to deliver measurable results for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    <feature.icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    {feature.benefit}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Comparison Table */}
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">See How We Compare</h3>
                <p className="text-blue-100">ConvertPro vs. Traditional Solutions</p>
              </div>
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-4 px-4 font-medium text-gray-900">Feature</th>
                        <th className="text-center py-4 px-4 font-medium text-blue-600">ConvertPro</th>
                        <th className="text-center py-4 px-4 font-medium text-gray-600">Competitors</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-4 px-4 text-gray-700">Setup Time</td>
                        <td className="py-4 px-4 text-center">
                          <Badge className="bg-green-100 text-green-800">5 minutes</Badge>
                        </td>
                        <td className="py-4 px-4 text-center text-gray-600">2-4 weeks</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-4 px-4 text-gray-700">AI-Powered Insights</td>
                        <td className="py-4 px-4 text-center">
                          <Check className="h-5 w-5 text-green-600 mx-auto" />
                        </td>
                        <td className="py-4 px-4 text-center">
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4 text-gray-700">24/7 Support</td>
                        <td className="py-4 px-4 text-center">
                          <Check className="h-5 w-5 text-green-600 mx-auto" />
                        </td>
                        <td className="py-4 px-4 text-center text-gray-600">Business hours only</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">Customer Success</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Join 50,000+ Happy Customers
            </h2>
            <p className="text-xl text-gray-600">
              See what our customers are saying about their results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-medium text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Average results after 30 days:</p>
            <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">340%</p>
                <p className="text-gray-600">Conversion Increase</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600">15hrs</p>
                <p className="text-gray-600">Time Saved Weekly</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-purple-600">94%</p>
                <p className="text-gray-600">Accuracy Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">Pricing</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Start free, scale as you grow. No hidden fees, cancel anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Starter</h3>
                <p className="text-gray-600 mb-6">Perfect for small businesses</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">$29</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <Button className="w-full mb-6" variant="outline">Start Free Trial</Button>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-600 mr-3" />
                    <span className="text-gray-700">Up to 10,000 visitors</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-600 mr-3" />
                    <span className="text-gray-700">Basic analytics</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-600 mr-3" />
                    <span className="text-gray-700">Email support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-600 relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">
                Most Popular
              </Badge>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Professional</h3>
                <p className="text-gray-600 mb-6">Best for growing companies</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">$99</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <Button className="w-full mb-6 bg-blue-600 hover:bg-blue-700">Start Free Trial</Button>
                <ul className="space-y-3">
                  {pricingFeatures.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-4 w-4 text-green-600 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <p className="text-gray-600 mb-6">For large organizations</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">Custom</span>
                </div>
                <Button className="w-full mb-6" variant="outline">Contact Sales</Button>
                <ul className="space-y-3">
                  {pricingFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-4 w-4 text-green-600 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">All plans include a 14-day free trial</p>
            <div className="flex justify-center items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-2" />
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center">
                <Lock className="h-4 w-4 mr-2" />
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center">
                <Award className="h-4 w-4 mr-2" />
                <span>SOC 2 Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Capture Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to 3x Your Conversions?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join 50,000+ businesses already using ConvertPro to maximize their revenue.
          </p>
          
          {!emailCaptured ? (
            <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-4 focus:ring-white/20"
                required
              />
              <Button type="submit" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Start Free Trial
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          ) : (
            <div className="bg-white/10 rounded-lg p-6 max-w-md mx-auto">
              <Check className="h-8 w-8 text-green-400 mx-auto mb-3" />
              <p className="text-white font-medium">Thanks! Check your email for next steps.</p>
            </div>
          )}
          
          <p className="text-blue-100 text-sm mt-4">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Target className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">ConvertPro</span>
              </div>
              <p className="text-gray-400">
                The AI-powered conversion optimization platform trusted by 50,000+ businesses worldwide.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-800" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 ConvertPro. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Shield className="h-4 w-4" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Award className="h-4 w-4" />
                <span>SOC 2 Certified</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
