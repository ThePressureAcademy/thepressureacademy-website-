import { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown,
  Play,
  Apple,
  Smartphone,
  Star,
  TrendingUp,
  Activity,
  Brain,
  Clock,
  Target,
  Zap,
  CheckCircle2,
  ArrowRight,
  Mail,
  Sparkles,
  Flame,
  Shield,
  BarChart3,
  Shirt,
  GraduationCap,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thanks for your interest! We will notify you when early access opens.');
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-charcoal text-cream overflow-x-hidden">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-charcoal/95 backdrop-blur-xl border-b border-white/5' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-4 group"
            >
              <img 
                src="/logo-tpa.png" 
                alt="The Pressure Academy" 
                className="h-14 w-auto transition-transform group-hover:scale-110 drop-shadow-lg"
              />
              <span className="hidden sm:block text-base font-bold tracking-widest text-cream">
                THE PRESSURE ACADEMY
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <button onClick={() => scrollToSection('brands')} className="text-sm text-taupe hover:text-rust transition-colors">
                Our Brands
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-sm text-taupe hover:text-rust transition-colors">
                How It Works
              </button>
              <button onClick={() => scrollToSection('features')} className="text-sm text-taupe hover:text-rust transition-colors">
                Features
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-sm text-taupe hover:text-rust transition-colors">
                FAQ
              </button>
              <Button 
                onClick={() => scrollToSection('cta')}
                className="bg-rust hover:bg-rust-light text-white px-5 py-2 rounded-lg font-medium transition-all hover:shadow-glow"
              >
                Get Early Access
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 text-cream"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-charcoal/98 backdrop-blur-xl border-b border-white/5">
            <div className="px-4 py-6 space-y-4">
              <button onClick={() => scrollToSection('brands')} className="block w-full text-left py-2 text-taupe hover:text-rust">
                Our Brands
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="block w-full text-left py-2 text-taupe hover:text-rust">
                How It Works
              </button>
              <button onClick={() => scrollToSection('features')} className="block w-full text-left py-2 text-taupe hover:text-rust">
                Features
              </button>
              <button onClick={() => scrollToSection('faq')} className="block w-full text-left py-2 text-taupe hover:text-rust">
                FAQ
              </button>
              <Button 
                onClick={() => scrollToSection('cta')}
                className="w-full bg-rust hover:bg-rust-light text-white py-3 rounded-lg font-medium"
              >
                Get Early Access
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/hero-bg.jpg" 
            alt="" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/50 to-charcoal" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rust/10 border border-rust/20 mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-rust" />
            <span className="text-sm font-medium text-rust-light">PRESSURE → PROGRESS</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up animation-delay-100">
            The Performance
            <br />
            <span className="gradient-text">Ecosystem</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-taupe max-w-2xl mx-auto mb-4 animate-fade-in-up animation-delay-200">
            The Pressure Academy is home to shift worker training systems, AI powered coaching, 
            and premium grappling apparel. Built for those who operate under pressure.
          </p>

          {/* Social Proof Mini */}
          <div className="flex items-center justify-center gap-6 mb-10 animate-fade-in-up animation-delay-300">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <img src="/testimonial-1.jpg" alt="" className="w-8 h-8 rounded-full border-2 border-charcoal object-cover" />
                <img src="/testimonial-2.jpg" alt="" className="w-8 h-8 rounded-full border-2 border-charcoal object-cover" />
                <img src="/testimonial-3.jpg" alt="" className="w-8 h-8 rounded-full border-2 border-charcoal object-cover" />
              </div>
              <span className="text-sm text-taupe">Join <span className="text-cream font-semibold">2,000+</span> early adopters</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-rust fill-rust" />
              <span className="text-sm text-cream font-semibold">4.9</span>
              <span className="text-sm text-taupe">from beta users</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
            <Button 
              onClick={() => scrollToSection('cta')}
              className="btn-primary text-lg px-8 py-4 flex items-center gap-2"
            >
              Get Early Access
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              onClick={() => scrollToSection('brands')}
              variant="outline"
              className="btn-secondary text-lg px-8 py-4 flex items-center gap-2"
            >
              <Play className="w-5 h-5" />
              Explore Our Brands
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-taupe" />
        </div>
      </section>

      {/* Brands Section */}
      <section id="brands" className="py-20 lg:py-32 bg-charcoal-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-rust font-semibold tracking-wider text-sm uppercase">The Ecosystem</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
              Our <span className="gradient-text">Brands</span>
            </h2>
            <p className="text-taupe text-lg max-w-2xl mx-auto">
              Four pillars. One mission: Turn pressure into progress.
            </p>
          </div>

          {/* Brands Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                logo: '/logo-planner.png',
                name: 'The Pressure Planner',
                tagline: 'The App',
                description: 'Your complete training companion. Daily scoring, AI coaching, technique journal, round timer, and shift aware protocols.',
                icon: Activity,
                cta: 'Try the Web App',
                link: '/pressure-planner.html',
                status: 'Beta Live'
              },
              {
                logo: '/logo-tpa.png',
                name: 'The Pressure Blueprint',
                tagline: 'The Training System',
                description: 'IF THEN decision trees that adapt to your belt, style, and training patterns. Biomechanics lab with anatomical breakdowns.',
                icon: Target,
                cta: 'Learn More',
                link: '#blueprint',
                status: 'Included'
              },
              {
                logo: '/logo-tested.png',
                name: 'Pressure Tested',
                tagline: 'The Apparel',
                description: 'Premium streetwear and grappling gear for those who prove themselves on the mats. Limited drops. Maximum quality.',
                icon: Shirt,
                cta: 'Coming Soon',
                link: '#',
                status: 'Coming 2026'
              },
              {
                logo: '/logo-tpa.png',
                name: 'Pressure Academy Tutoring',
                tagline: 'The Future',
                description: 'Online study systems for children and homeschooled students. Senior accredited teachers, parent collaboration, structured learning.',
                icon: GraduationCap,
                cta: 'Join Waitlist',
                link: '#cta',
                status: 'In Development'
              }
            ].map((brand, index) => (
              <div 
                key={index}
                className="glass-card rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:border-rust/30 hover:shadow-glow group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <img src={brand.logo} alt={brand.name} className="h-12 w-auto" />
                    <div>
                      <h3 className="text-lg font-bold">{brand.name}</h3>
                      <span className="text-xs text-rust font-semibold">{brand.tagline}</span>
                    </div>
                  </div>
                  <span className="px-2 py-1 rounded-full bg-rust/20 text-rust-light text-xs font-semibold">
                    {brand.status}
                  </span>
                </div>
                <p className="text-taupe text-sm leading-relaxed mb-6">{brand.description}</p>
                <a 
                  href={brand.link}
                  className="inline-flex items-center gap-2 text-rust font-semibold text-sm hover:text-rust-light transition-colors"
                >
                  {brand.cta}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="py-8 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-cream">2,000+</div>
              <div className="text-sm text-taupe">Early Adopters</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/10" />
            <div className="text-center">
              <div className="text-3xl font-bold text-cream">50K+</div>
              <div className="text-sm text-taupe">Training Sessions Logged</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/10" />
            <div className="text-center">
              <div className="text-3xl font-bold text-cream">4.9</div>
              <div className="text-sm text-taupe">Beta User Rating</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/10" />
            <div className="text-center">
              <div className="text-3xl font-bold text-cream">87%</div>
              <div className="text-sm text-taupe">Retention Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-rust font-semibold tracking-wider text-sm uppercase">Simple Process</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
              How The Pressure Planner <span className="gradient-text">Works</span>
            </h2>
            <p className="text-taupe text-lg max-w-2xl mx-auto">
              Three steps to transform pressure into progress. Built for people with demanding schedules.
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                step: '01',
                title: 'Log Your Training',
                description: 'Record your rolls, workouts, and daily metrics. Our AI understands BJJ terminology and extracts insights from your natural voice notes.',
                icon: Activity,
              },
              {
                step: '02',
                title: 'Get Personalised Insights',
                description: 'Receive shift aware recommendations based on your circadian rhythm, training load, and recovery status. No generic advice.',
                icon: Brain,
              },
              {
                step: '03',
                title: 'Improve Deliberately',
                description: 'Follow your custom Pressure Blueprint with IF THEN decision trees, technique recommendations, and progress tracking.',
                icon: TrendingUp,
              },
            ].map((item, index) => (
              <div 
                key={index}
                className="relative group"
              >
                <div className="glass-card rounded-2xl p-8 h-full transition-all duration-300 hover:border-rust/30 hover:shadow-glow">
                  <div className="text-6xl font-bold text-rust/20 mb-4">{item.step}</div>
                  <div className="w-12 h-12 rounded-xl bg-rust/10 flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6 text-rust" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-taupe leading-relaxed">{item.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-rust/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 lg:py-32 bg-charcoal-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-rust font-semibold tracking-wider text-sm uppercase">Powerful Features</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
              Everything You Need to <span className="gradient-text">Level Up</span>
            </h2>
            <p className="text-taupe text-lg max-w-2xl mx-auto">
              A complete ecosystem for shift workers who train. From technique analysis to recovery optimisation.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: BarChart3,
                title: 'Daily Score Engine',
                description: '6 variable weighted scoring: sleep, stress, training, nutrition, hydration, and family time. Personalised to your life.',
                badge: null,
              },
              {
                icon: Target,
                title: 'Pressure Blueprint',
                description: 'IF THEN decision trees across 5 positional systems. Adaptive to your belt, style, and training patterns.',
                badge: null,
              },
              {
                icon: Zap,
                title: 'Biomechanics Lab',
                description: 'Anatomical breakdown of submissions and body mechanics. Understand WHY techniques work, not just how.',
                badge: 'Market First',
              },
              {
                icon: Brain,
                title: 'AI Coach',
                description: 'Learns from your journal and logs. Nutrition macros, technique analysis, shift aware recommendations.',
                badge: null,
              },
              {
                icon: Clock,
                title: 'Round Timer',
                description: 'Configurable work/rest rounds with vibration alerts. Built specifically for rolling and drilling.',
                badge: null,
              },
              {
                icon: Shield,
                title: 'Technique Journal',
                description: 'AI analysed entries detecting positions, submissions, and concepts. Track your game evolution.',
                badge: null,
              },
            ].map((feature, index) => (
              <div 
                key={index}
                className="glass-card rounded-2xl p-6 transition-all duration-300 hover:border-rust/30 hover:shadow-glow group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-rust/10 flex items-center justify-center group-hover:bg-rust/20 transition-colors">
                    <feature.icon className="w-5 h-5 text-rust" />
                  </div>
                  {feature.badge && (
                    <span className="px-2 py-1 rounded-full bg-rust/20 text-rust-light text-xs font-semibold">
                      {feature.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-taupe text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div>
              <span className="text-rust font-semibold tracking-wider text-sm uppercase">The App</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6">
                Your Pocket <span className="gradient-text">Dojo</span>
              </h2>
              <p className="text-taupe text-lg mb-8">
                Track, train, and grow — all from your phone. The Pressure Planner app puts 
                professional grade training tools in your pocket, optimised for shift workers 
                and grapplers.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Voice powered training journal with BJJ terminology recognition',
                  'Real time daily score based on 6 key performance variables',
                  'Shift aware recommendations that adapt to your schedule',
                  'Technique library with biomechanical breakdowns',
                  'Progress tracking with visual roll flow analysis',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-rust flex-shrink-0 mt-0.5" />
                    <span className="text-cream/80">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="/pressure-planner.html"
                  className="btn-primary flex items-center gap-2"
                >
                  <Smartphone className="w-5 h-5" />
                  Try Web App Now
                </a>
                <Button 
                  onClick={() => scrollToSection('cta')}
                  variant="outline"
                  className="btn-secondary flex items-center gap-2"
                >
                  <Apple className="w-5 h-5" />
                  iOS Coming Soon
                </Button>
              </div>
            </div>

            {/* App Mockup */}
            <div className="relative">
              <div className="absolute inset-0 bg-rust/20 blur-3xl rounded-full" />
              <img 
                src="/app-mockup.jpg" 
                alt="Pressure Planner App" 
                className="relative z-10 rounded-3xl shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 lg:py-32 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-rust/10 via-transparent to-rust/5" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="glass-card rounded-3xl p-8 lg:p-12 text-center border-rust/20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rust/10 border border-rust/20 mb-6">
              <Flame className="w-4 h-4 text-rust" />
              <span className="text-sm font-medium text-rust-light">Limited Early Access</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Ready to Turn Pressure Into <span className="gradient-text">Progress</span>?
            </h2>

            <p className="text-taupe text-lg max-w-2xl mx-auto mb-8">
              Join 2,000+ shift workers and grapplers who are already using The Pressure Planner 
              to train smarter, recover better, and improve deliberately.
            </p>

            {/* Email Form */}
            <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-taupe" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 py-3 bg-charcoal-lighter border-white/10 text-cream placeholder:text-taupe focus:border-rust focus:ring-rust/20"
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  className="btn-primary whitespace-nowrap"
                >
                  Get Early Access
                </Button>
              </div>
              <p className="text-xs text-taupe mt-3">
                No spam. Unsubscribe anytime. We respect your privacy.
              </p>
            </form>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-taupe">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-rust" />
                <span>Free Early Access</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-rust" />
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-rust" />
                <span>Cancel Anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 lg:py-32 bg-charcoal-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-rust font-semibold tracking-wider text-sm uppercase">FAQ</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-taupe text-lg">
              Everything you need to know about The Pressure Academy.
            </p>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: 'What is The Pressure Academy?',
                answer: 'The Pressure Academy is a performance ecosystem for shift workers who train. We are home to four brands: The Pressure Planner (app), The Pressure Blueprint (training system), Pressure Tested (apparel), and future tutoring services. Our mission is to help people turn pressure into progress.',
              },
              {
                question: 'What makes The Pressure Planner different from other BJJ apps?',
                answer: 'Unlike generic fitness apps, The Pressure Planner is specifically designed for shift workers who train. Our circadian aware protocols adapt to your schedule, not the other way around. Plus, our AI understands BJJ terminology and provides technique recommendations based on your actual training patterns.',
              },
              {
                question: 'Is this only for BJJ practitioners?',
                answer: 'While our roots are in Brazilian Jiu Jitsu, The Pressure Academy works for any shift worker who wants to optimise their training and recovery. The principles of pressure management, deliberate practice, and circadian optimisation apply across all athletic disciplines.',
              },
              {
                question: 'How does the circadian aware training work?',
                answer: 'Our system takes into account your shift schedule, sleep patterns, and natural energy fluctuations to recommend optimal training times, intensity levels, and recovery protocols. Whether you work days, nights, or rotating shifts, the app adapts to you.',
              },
              {
                question: 'When will the native apps be available?',
                answer: 'The web app is live now! Native iOS and Android apps are in development. Sign up for early access to be among the first to get the mobile apps when they launch.',
              },
              {
                question: 'Is there a free trial?',
                answer: 'Yes! Early access members get free lifetime access to core features. We will introduce premium tiers later, but early adopters will always have access to the features they signed up with.',
              },
            ].map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card rounded-xl border-none px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-cream hover:text-rust transition-colors py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-taupe pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 lg:py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 lg:gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img src="/logo-tpa.png" alt="The Pressure Academy" className="h-10 w-auto" />
                <span className="text-sm font-bold tracking-widest text-cream">
                  THE PRESSURE ACADEMY
                </span>
              </div>
              <p className="text-taupe max-w-sm mb-6">
                A performance ecosystem for shift workers, grapplers, and anyone turning pressure into progress.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-lg bg-charcoal-lighter flex items-center justify-center text-taupe hover:text-rust hover:bg-rust/10 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-charcoal-lighter flex items-center justify-center text-taupe hover:text-rust hover:bg-rust/10 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold text-cream mb-4">Brands</h4>
              <ul className="space-y-2">
                <li><a href="/pressure-planner.html" className="text-taupe hover:text-rust transition-colors">Pressure Planner</a></li>
                <li><button onClick={() => scrollToSection('features')} className="text-taupe hover:text-rust transition-colors">Pressure Blueprint</button></li>
                <li><button onClick={() => scrollToSection('brands')} className="text-taupe hover:text-rust transition-colors">Pressure Tested</button></li>
                <li><button onClick={() => scrollToSection('cta')} className="text-taupe hover:text-rust transition-colors">Tutoring (Coming)</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-cream mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-taupe hover:text-rust transition-colors">About</a></li>
                <li><a href="#" className="text-taupe hover:text-rust transition-colors">Blog</a></li>
                <li><a href="mailto:agent@thepressureacademy.com" className="text-taupe hover:text-rust transition-colors">Contact</a></li>
                <li><a href="#" className="text-taupe hover:text-rust transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-taupe">
              © 2026 The Pressure Academy. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-taupe">
              <a href="#" className="hover:text-rust transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-rust transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
