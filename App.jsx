import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <section className="max-w-4xl mx-auto grid gap-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">[Your Name]</h1>
          <p className="text-lg text-gray-600">Full Stack Developer | Python | Django | Flutter | Android</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="mailto:your.email@example.com"><Mail /></a>
            <a href="https://github.com/yourusername" target="_blank"><Github /></a>
            <a href="https://linkedin.com/in/yourusername" target="_blank"><Linkedin /></a>
          </div>
        </div>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">About Me</h2>
            <p>
              I'm a software engineer with 6+ years of experience across full stack development, specializing in backend APIs using Python (Django, DRF), and cross-platform mobile apps using Flutter and Android (Java). I bring deep technical knowledge with a focus on performance, scalability, and clean code. I'm looking for remote or international roles that value innovation and engineering excellence.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Featured Projects</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>HRMS Platform:</strong> Web + Android system for employee and leave management with custom payroll features.</li>
              <li><strong>Kashee E-Dairy:</strong> Flutter + Django + Firebase app supporting offline data collection, milk tracking, and payment logs.</li>
              <li><strong>Feedback Portal:</strong> End-to-end feedback system with role-based access using Django + MSSQL.</li>
              <li><strong>E-commerce Backend:</strong> Developed robust API in Django for a custom shopping platform, with authentication, cart, orders, and Razorpay integration.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
            <ul className="list-disc list-inside">
              <li><strong>Languages:</strong> Python, Java, Dart, HTML, JavaScript</li>
              <li><strong>Backend:</strong> Django, Django REST Framework, Redis, Celery</li>
              <li><strong>Frontend:</strong> Flutter (Riverpod, GoRouter), HTML, Tailwind</li>
              <li><strong>Mobile:</strong> Android (Java), Flutter</li>
              <li><strong>Database:</strong> MSSQL, MySQL, PostgreSQL</li>
              <li><strong>DevOps:</strong> AWS EC2/RDS, Google Cloud, Firebase Hosting</li>
              <li><strong>Tools:</strong> Git, GitHub, VS Code, Android Studio, CI/CD pipelines</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Open to Opportunities</h2>
            <p>
              I'm actively seeking high-paying remote roles or international opportunities where I can leverage my skills to build impactful digital products.
            </p>
            <div className="text-center mt-4">
              <Button className="text-lg px-6 py-2 rounded-xl" asChild>
                <a href="https://yourresume.link" target="_blank">View My Resume</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
