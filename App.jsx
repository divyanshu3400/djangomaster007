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
          <p className="text-lg text-gray-600">Full Stack Developer | Python | Django | Flutter</p>
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
              I'm a results-driven developer with 6+ years of experience building scalable web and mobile applications. My expertise lies in Django, REST APIs, Flutter, and Android. I'm open to remote and international roles that value quality code and impactful solutions.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Featured Projects</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>HRMS Platform:</strong> Web + Android system for employee and leave management.
              </li>
              <li>
                <strong>Kashee E-Dairy:</strong> Flutter app with offline-first support for rural networks.
              </li>
              <li>
                <strong>Feedback Portal:</strong> Django-powered feedback & reporting system.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
            <p>
              Python, Django, Flutter, Java, Dart, MSSQL, PostgreSQL, Redis, AWS, Firebase, Git, CI/CD
            </p>
          </CardContent>
        </Card>

        <div className="text-center mt-4">
          <Button className="text-lg px-6 py-2 rounded-xl" asChild>
            <a href="https://yourresume.link" target="_blank">View My Resume</a>
          </Button>
        </div>
      </section>
    </main>
  );
}