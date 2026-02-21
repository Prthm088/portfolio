import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Send email using EmailJS
      await emailjs.send('service_7ll9qos',
      // Your Service ID
      'template_1rdxqor',
      // Your Template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'prathammohod088@gmail.com'
      }, '-tNOERNn3za__n1ca' // Your Public Key
      );
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon."
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to send message",
        description: "There was an error sending your message. Please try again or contact me directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <section id="contact" className="py-20 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,hsl(var(--primary)/0.02)_50%,transparent_75%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full mb-4"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Let's discuss how we can work together on your next project
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  Let's work together
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Whether you have a project in mind, need AI integration, 
                  or want to discuss full-stack development opportunities, 
                  I'd love to hear from you.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-transparent hover:from-primary/10 transition-all duration-300 border border-primary/10">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Email</div>
                    <a href="mailto:prathammohod088@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      prathammohod088@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-transparent hover:from-primary/10 transition-all duration-300 border border-primary/10">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Phone</div>
                    <a href="tel:+917620397738" className="text-muted-foreground hover:text-primary transition-colors">
                      +91 7620397738
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-transparent hover:from-primary/10 transition-all duration-300 border border-primary/10">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Location</div>
                    <span className="text-muted-foreground">Pune, Maharashtra</span>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4 pt-6">
                <Button variant="outline" size="icon" className="hover:scale-110 transition-all duration-200 hover:bg-primary/10 hover:border-primary/30" asChild>
                  <a href="https://github.com/Prthm088" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="hover:scale-110 transition-all duration-200 hover:bg-primary/10 hover:border-primary/30" asChild>
                  <a href="https://linkedin.com/in/pratham-mohod-80136b230" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="hover:scale-110 transition-all duration-200 hover:bg-primary/10 hover:border-primary/30" asChild>
                  <a href="mailto:prathammohod088@gmail.com">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    Send me a message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-sm font-medium">Name</Label>
                        <Input id="name" name="name" value={formData.name} onChange={handleChange} required disabled={isSubmitting} className="mt-2 focus:ring-2 focus:ring-primary/20 transition-all duration-200" placeholder="Your full name" />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                        <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required disabled={isSubmitting} className="mt-2 focus:ring-2 focus:ring-primary/20 transition-all duration-200" placeholder="your.email@example.com" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                      <Textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} required disabled={isSubmitting} className="mt-2 focus:ring-2 focus:ring-primary/20 transition-all duration-200" placeholder="Tell me about your project or how I can help..." />
                    </div>
                    <Button type="submit" disabled={isSubmitting} className="w-full hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>;
};