
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Award, Users, Globe, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    { label: 'Cars Sold', value: '500+', icon: '🚗' },
    { label: 'Happy Customers', value: '250+', icon: '😊' },
    { label: 'Years Experience', value: '15+', icon: '📅' },
    { label: 'Global Reach', value: '20+', icon: '🌍' },
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      description: 'Automotive enthusiast with 20+ years in luxury car business'
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Sales',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b743?w=400&h=400&fit=crop',
      description: 'Expert in luxury automotive sales and customer relations'
    },
    {
      name: 'Arjun Patel',
      role: 'Technical Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      description: 'Mechanical engineer specializing in high-performance vehicles'
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <Link to="/">
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            About SuperCars India
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your premier destination for the world's most exclusive supercars. We bring luxury, performance, and prestige to discerning automotive enthusiasts across India.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2009, SuperCars India began as a passion project by automotive enthusiasts who believed that India deserved access to the world's finest supercars.
              </p>
              <p>
                Over the years, we've built strong relationships with leading manufacturers like Ferrari, Lamborghini, McLaren, and Bugatti, becoming their trusted partner in the Indian market.
              </p>
              <p>
                Today, we're proud to be India's premier luxury automotive destination, offering not just cars, but complete ownership experiences that exceed expectations.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=400&fit=crop"
              alt="Luxury showroom"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Excellence</h3>
              <p className="text-sm text-muted-foreground">We maintain the highest standards in everything we do</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Customer First</h3>
              <p className="text-sm text-muted-foreground">Your satisfaction is our top priority</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Trust</h3>
              <p className="text-sm text-muted-foreground">Building lasting relationships through transparency</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Innovation</h3>
              <p className="text-sm text-muted-foreground">Embracing the future of automotive technology</p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <Badge variant="secondary" className="mb-3">{member.role}</Badge>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Dream Car?</h2>
          <p className="text-muted-foreground mb-6">
            Explore our collection of the world's finest supercars
          </p>
          <Link to="/all-cars">
            <Button size="lg">Browse Collection</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
