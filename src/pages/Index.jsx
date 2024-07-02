import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="space-y-16">
      {/* Header Section */}
      <section className="text-center space-y-4">
        <div className="bg-gray-300 h-64 w-full"></div>
        <h1 className="text-4xl font-bold">Discover the World of Flamingos</h1>
      </section>

      {/* About Section */}
      <section id="about" className="space-y-4">
        <h2 className="text-3xl font-semibold">About Flamingos</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 space-y-2">
            <p>Flamingos are a type of wading bird in the family Phoenicopteridae.</p>
            <p>They are known for their bright pink feathers, long legs, and distinctive beaks.</p>
          </div>
          <div className="bg-gray-300 h-48 w-full md:w-1/3"></div>
        </div>
      </section>

      <Separator />

      {/* Habitat Section */}
      <section id="habitat" className="space-y-4">
        <h2 className="text-3xl font-semibold">Habitat</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="bg-gray-300 h-48 w-full md:w-1/3"></div>
          <div className="flex-1 space-y-2">
            <p>Flamingos are found in shallow lakes, lagoons, mangrove swamps, and sandy islands.</p>
            <p>They thrive in both tropical and subtropical environments.</p>
          </div>
        </div>
      </section>

      <Separator />

      {/* Gallery Section */}
      <section id="gallery" className="space-y-4">
        <h2 className="text-3xl font-semibold">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="bg-gray-300 h-48"></div>
          <div className="bg-gray-300 h-48"></div>
          <div className="bg-gray-300 h-48"></div>
          <div className="bg-gray-300 h-48"></div>
        </div>
      </section>

      <Separator />

      {/* Contact Section */}
      <section id="contact" className="space-y-4">
        <h2 className="text-3xl font-semibold">Contact Us</h2>
        <Card>
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <Input placeholder="Subject" />
            <Textarea placeholder="Message" />
            <Button>Submit</Button>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="text-center space-y-2">
        <p>Follow us on social media:</p>
        <div className="flex justify-center space-x-4">
          <Button variant="link">Facebook</Button>
          <Button variant="link">Twitter</Button>
          <Button variant="link">Instagram</Button>
        </div>
        <p>&copy; 2023 Flamingo World. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;