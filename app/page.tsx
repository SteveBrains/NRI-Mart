"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Download, Globe, Heart, Zap, Users, Package, Truck, MessageCircle, Star, ShoppingBasket, Store } from "lucide-react";

/**
 * NRI Mart Landing Page - Next.js Migration with Proper SEO Content
 */

export default function Home() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "NRI in USA",
      content: "NRI Mart made it so easy to send gifts to my family back home. The case manager handled everything perfectly!",
      rating: 5,
      avatar: "🇮🇳"
    },
    {
      name: "Priya Sharma",
      role: "NRI in UK",
      content: "The multilingual support is fantastic. I can communicate in Hindi and English seamlessly.",
      rating: 5,
      avatar: "🇬🇧"
    },
    {
      name: "Amit Patel",
      role: "NRI in Australia",
      content: "Fast delivery, reliable service, and personalized attention. Highly recommended!",
      rating: 5,
      avatar: "🇦🇺"
    }
  ];

  const services = [
    {
      icon: <Store className="w-10 h-10" />,
      title: "Store Products",
      description: "Browse and order directly from our app! We offer a wide range of products available in our store, delivered right to your doorstep."
    },
    {
      icon: <ShoppingBasket className="w-10 h-10" />,
      title: "Request Your Products",
      description: "Can't find it? Our team will source your desired items. For food, we ensure freshness with a 2-day lead time."
    },
    {
      icon: <Package className="w-10 h-10" />,
      title: "Own Luggage Service",
      description: "Simplify sending luggage. Pickup from your location or drop-off at our address, and we'll ensure safe, on-time delivery."
    },
    {
      icon: <Truck className="w-10 h-10" />,
      title: "E-commerce Products",
      description: "Access products from India and globally. We handle ordering and delivery, ensuring a secure and genuine shopping experience."
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Convenience",
      description: "All your needs met in one place. From daily essentials to complex logistics."
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Efficiency",
      description: "Fast and reliable delivery and shipping through our network of strategically located warehouses."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Personalized Service",
      description: "Dedicated case managers assigned to address any questions or concerns about your orders."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Multilingual Support",
      description: "Communicate easily in Telugu, English, Hindi, and more with our vendors and case managers."
    },
    {
      icon: <ShoppingBasket className="w-8 h-8" />,
      title: "Wide Range",
      description: "From everyday items to specialized requests, we've got you covered."
    }
  ];

  const languages = [
    { code: "EN", name: "English" },
    { code: "HI", name: "हिन्दी" },
    { code: "TE", name: "తెలుగు" },
    { code: "TA", name: "தமிழ்" }
  ];

  const countries = [
    { name: "United States", flag: "🇺🇸" },
    { name: "United Kingdom", flag: "🇬🇧" },
    { name: "Canada", flag: "🇨🇦" },
    { name: "Australia", flag: "🇦🇺" },
    { name: "Germany", flag: "🇩🇪" },
    { name: "UAE", flag: "🇦🇪" },
    { name: "Singapore", flag: "🇸🇬" },
    { name: "New Zealand", flag: "🇳🇿" },
    { name: "Netherlands", flag: "🇳🇱" },
    { name: "France", flag: "🇫🇷" },
    { name: "Ireland", flag: "🇮🇪" },
    { name: "Saudi Arabia", flag: "🇸🇦" },
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Download App",
      description: "Browse our extensive catalog and place your orders directly through the NRI Mart app.",
      icon: <Download className="w-12 h-12" />
    },
    {
      step: 2,
      title: "Request Product",
      description: "If you need something specific, simply submit a request through the app and we'll source it for you.",
      icon: <MessageCircle className="w-12 h-12" />
    },
    {
      step: 3,
      title: "Manage Luggage",
      description: "Contact your dedicated case manager to arrange for convenient luggage pickup and safe delivery.",
      icon: <Package className="w-12 h-12" />
    },
    {
      step: 4,
      title: "Shop E-commerce",
      description: "Use our virtual address for deliveries from any e-commerce site. We'll update you with status and images.",
      icon: <Truck className="w-12 h-12" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg font-playfair">NM</span>
            </div>
            <span className="font-bold text-xl text-foreground font-playfair">NRI Mart</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-poppins">Our Services</a>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors font-poppins">How It Works</a>
            <a href="#why-choose" className="text-foreground hover:text-primary transition-colors font-poppins">Why Choose Us</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-poppins">Contact</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-white font-poppins">
            <Download className="mr-2 h-4 w-4" />
            Download App
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-48">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://private-us-east-1.manuscdn.com/sessionFile/Jso19SPJ3omHUJw6xkNjnn/sandbox/eaUOwqFNzOiSaSEWJZ0xKO-img-1_1770959029000_na1fn_bnJpLWhlcm8tYmFja2dyb3VuZA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSnNvMTlTUEozb21IVUp3NnhrTmpubi9zYW5kYm94L2VhVU93cUZOek9pU2FTRVdKWjB4S08taW1nLTFfMTc3MDk1OTAyOTAwMF9uYTFmbl9ibkpwTFdobmNtOHRZbUZqYTJkeWIzVnVaQS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=YN7EEhvtCzOZCO202-yC86vvIHXxxGQtc-OqqXFcBJPzQ4XzFWm1CYPS3gluKckX-CAQaFGEL5doOVnYddQcBWLtomP7IpL5JMMO9A~g57lskFH~HHECGHD9zha6C2dFzK0DJeFrE8ldmYD8vm3tK-vnhL9GtVaEMlO0nNV2YmiO2e310UwIIsI099bMrA5GAoyIWJy4gXfg0f7KAcYVtZ9gx60zj6vjHkBc4NtuGgGPeFqhYec2RdEpWYFAW62-XIqvRgtgMlGdKf-Jxwx~-XwZVA-4EVz62-pASS8sQr6PzsEDmdSqFxtnn2RRh7RoJ~qi15mVUeMpq8Po4~28Fw__)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-white/40 z-0" />

        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInLeft">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight font-playfair uppercase">
                Bringing <span className="text-primary tracking-normal">INDIA</span> <br /> Near you
              </h1>
              <p className="text-xl text-foreground/80 mb-8 font-light font-poppins leading-relaxed">
                NRI Mart is Bringing INDIA Near you. We deliver the authentic taste, touch, and tradition of India directly to your doorstep, anywhere in the world.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <a href="#" className="hover:opacity-90 transition-opacity">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                    alt="Download on the App Store"
                    className="h-12 md:h-14"
                  />
                </a>
                <a href="#" className="hover:opacity-90 transition-opacity">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Get it on Google Play"
                    className="h-12 md:h-14"
                  />
                </a>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg px-8 h-12 md:h-14">
                  View Our Services
                </Button>
              </div>
            </div>

            <div className="hidden md:block animate-slideInRight">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/Jso19SPJ3omHUJw6xkNjnn/sandbox/eaUOwqFNzOiSaSEWJZ0xKO-img-3_1770959028000_na1fn_bnJpLWNhc2UtbWFuYWdlci1oZXJv.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSnNvMTlTUEozb21IVUp3NnhrTmpubi9zYW5kYm94L2VhVU93cUZOek9pU2FTRVdKWjB4S08taW1nLTNfMTc3MDk1OTAyODAwMF9uYTFmbl9ibkpwTFdOaGMyVXRiV0Z1WVdkbGNpMW9aWEp2LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=lQ1sRMfd7RsFftpHtOLKd6FW3gRVcXlptbwkU4c3rFGXM7kNxNlv19SW69zB7ACCvuvraPJ-sBgG4E-wslQX7AYVY-n8syUJpR9JRiZ9geFfYYKU4bi8phItm59OUuEE1P3LLDs6HayNJNLNEXEspTrnrpu~gdxIerfANN2QOA2T6p0il98GXYiYVs3AtYOyTEuNcN2wLwyg7h1dHpNgmSgA5xsTl1c2OSuqFirEhGZunWxvrqp3jbL7tIwmoOTaiM5toMJ81C9KHZxJth-5-7GiA-t724LV9ZSzmWqSGCHXL0WjQ2im2Qnn9G5f1-GkprdCxJCBR~g1PE3AAoMeKw__"
                alt="NRI Mart Case Manager"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intro Text Section */}
      <section className="py-16 bg-muted/20">
        <div className="container max-w-4xl text-center">
          <p className="text-xl text-foreground/80 font-poppins leading-relaxed">
            NRI Mart is dedicated to Bringing INDIA Near you. We understand the longing for familiar flavors and the convenience of having your favorite products, no matter where you are. That's why we offer a comprehensive service that goes beyond groceries.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-playfair">
              Our Services
            </h2>
            <p className="text-lg text-foreground/70 font-poppins">
              Comprehensive international shopping and logistics solutions tailored for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center text-primary mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70 font-poppins">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 md:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-playfair">
              How It Works
            </h2>
            <p className="text-lg text-foreground/70 font-poppins">
              Simple steps to bring a piece of home to your doorstep
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item, index) => (
              <div key={index} className="relative">
                <Card className="h-full border-border hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                      {item.icon}
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold text-sm">
                        {item.step}
                      </span>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/70 font-poppins">{item.description}</p>
                  </CardContent>
                </Card>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-1 bg-gradient-to-r from-primary to-secondary transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-playfair">
              Why Choose NRI Mart?
            </h2>
            <p className="text-lg text-foreground/70 font-poppins">
              Recognized for simplicity, efficiency, and cultural connection
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70 text-sm font-poppins">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section id="global-reach" className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="container">
          <div className="text-center mb-16 relative">
            <div className="inline-block px-4 py-1.5 mb-6 bg-primary/10 text-primary rounded-full text-xs font-bold tracking-[0.2em] font-poppins uppercase">
              Global Reach
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-playfair">
              We Ship to <span className="text-primary italic font-black">50+ Countries</span>
            </h2>
            <p className="text-lg text-foreground/70 font-poppins max-w-2xl mx-auto leading-relaxed">
              No matter where you are, we'll deliver the taste and touch of India directly to your doorstep with care and speed.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 px-4">
            {countries.map((country, index) => (
              <div
                key={index}
                className="flex items-center gap-4 px-6 py-4 bg-white border border-border rounded-2xl hover:border-primary/30 hover:shadow-[0_20px_50px_rgba(68,97,41,0.1)] hover:-translate-y-1 transition-all duration-500 group cursor-default min-w-[200px]"
              >
                <div className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center text-3xl shadow-inner group-hover:bg-primary/10 transition-colors duration-500">
                  {country.flag}
                </div>
                <span className="font-semibold text-foreground/80 group-hover:text-primary transition-colors duration-500 font-poppins">
                  {country.name}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-foreground/40 text-sm font-poppins tracking-wide">
              And many more... We are continuously expanding our footprint to serve you better.
            </p>
          </div>
        </div>
      </section>

      {/* Communication Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInLeft">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-playfair">
                Seamless Communication
              </h2>
              <p className="text-lg text-foreground/70 mb-8 font-poppins leading-relaxed">
                We understand the importance of clear communication. That's why we assign dedicated case managers to each customer. These managers are available to address any questions or concerns about your orders.
              </p>
              <div className="flex flex-wrap gap-4">
                {languages.map((lang, index) => (
                  <div key={index} className="px-4 py-2 bg-white rounded-full border border-border flex items-center gap-2">
                    <Globe className="w-4 h-4 text-primary" />
                    <span className="font-bold font-playfair">{lang.code}</span>
                    <span className="text-foreground/70 text-sm font-poppins">{lang.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4 font-playfair">Global Support Network</h3>
              <p className="text-foreground/70 mb-6 font-poppins">
                Our vendors and case managers are multilingual, fluent in Telugu, English, Hindi, and more to ensure you feel comfortable throughout your shopping journey.
              </p>
              <ul className="space-y-4 font-poppins">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span>Dedicated Case Managers</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span>Real-time Parcel Updates</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span>Secure E-commerce Handling</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 md:py-32 bg-gradient-to-r from-primary to-secondary">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
            Experience the Future of Convenience
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-poppins">
            Download NRI Mart today and bring a piece of home to your doorstep, wherever life takes you.
          </p>
          <div className="flex flex-wrap gap-6 justify-center items-center">
            <a href="#" className="hover:opacity-90 transition-opacity">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                alt="Download on the App Store"
                className="h-12 md:h-14 brightness-0 invert"
              />
            </a>
            <a href="#" className="hover:opacity-90 transition-opacity">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-12 md:h-14 brightness-0 invert"
              />
            </a>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 font-semibold h-12 md:h-14">
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="font-bold font-playfair">NM</span>
                </div>
                <span className="font-bold text-lg font-playfair">NRI Mart</span>
              </div>
              <p className="text-white/70 text-sm font-poppins">Bringing INDIA Near you, simplified.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 font-playfair">Quick Links</h4>
              <ul className="space-y-2 text-white/70 text-sm font-poppins">
                <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 font-playfair">Support</h4>
              <ul className="space-y-2 text-white/70 text-sm font-poppins">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 font-playfair">Connect</h4>
              <ul className="space-y-2 text-white/70 text-sm font-poppins mb-6">
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              </ul>
              <h4 className="font-bold mb-4 font-playfair">Get the App</h4>
              <div className="flex flex-col gap-3">
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-10 w-auto brightness-0 invert" />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-10 w-auto brightness-0 invert" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60 text-sm font-poppins">
            <p>&copy; 2026 NRI Mart. All rights reserved. Simplifying your life across borders.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
