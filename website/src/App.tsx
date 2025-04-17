import { useState, useEffect } from 'react';
import {
  Star,
  Database,
  Coffee,
  Clock,
  Code2,
  ArrowRight,
  Package,
  Feather,
  File,
  MousePointerClick
} from 'lucide-react';
import { Card } from './components/card';
import { IconBadge } from './components/icon-badge';
import Logo from './assets/logo.svg';
import { CodeBlock } from './components/code-block';

export default function App() {
  const api = "https://api.github.com/repos/nothiaki/TurtleDB"
  const [stars, setStars] = useState(0);

  useEffect(() => {
    fetch(api)
      .then(res => res.json())
      .then(res => {
        setStars(res["stargazers_count"]);
      });
  }, [])

  return (
    <div className="min-h-screen bg-primary-500">
      {/* Hero Section */}
      <div className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col items-center md:flex-row justify-between gap-8">
            <img src={Logo} alt="TurtleDB's logo" className="h-48 md:h-full" />
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-accent-500 mb-6">
                TurtleDB
              </h1>
              <p className="text-l md:text-xl text-gray-900 mb-8">
                A lightweight and modern embedded database for Java, designed to be fast, easy to use, and powerful — with native support for time travel queries so you can explore your data at any point in time. Built specifically for the Java ecosystem, it lets you store, query, and navigate historical states of your data with precision, all without adding unnecessary complexity.
              </p>
              <div className="flex gap-4 flex-col md:flex-row">
                <a
                  href="docs"
                  className="bg-accent-500 text-primary-100 px-8 py-3 rounded-lg font-medium hover:bg-accent-600 transition-colors flex items-center gap-2 justify-center md:justify-start"
                >
                  Documentation<ArrowRight size={20} />
                </a>
                <a
                  href="https://github.com/nothiaki/TurtleDB"
                  target="_blank"
                  className="text-gray-900 px-8 py-3 rounded-lg font-medium border border-gray-900 hover:border-accent-500 hover:text-accent-500 transition-colors flex items-center gap-2 justify-center md:justify-start"
                >
                  GitHub<Star size={20} />{stars}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Why Choose <span className="text-accent-500">TurtleDB</span>?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              icon={Database}
              title="Embedded Database"
              desc="Self-contained, perfect for Java applications that need reliable data storage without external dependencies."
            />
            <Card
              icon={Clock}
              title="Time Travel Queries"
              desc="Access historical data states with ease using our powerful time travel query capabilities."
            />
            <Card
              icon={File}
              title="Document Based"
              desc="Work with data in a flexible format that's perfect for modern applications. Manage documents effortlessly."
            />
            <Card
              icon={MousePointerClick}
              title="Easy to use"
              desc="Designed with simplicity in mindset up quickly, write less code, and focus on building."
            />
            <Card
              icon={Coffee}
              title="Made in Java for Java"
              desc="Built from the ground up in Java to seamlessly integrate with your Java ecosystem."
            />
            <Card
              icon={Feather}
              title="Lightweight"
              desc="Minimal footprint with performance optimized for speed, efficiency, and low resource usage."
            />
          </div>
        </div>
      </div>

      {/* Code Example Section */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Easy to Integrate
              </h2>
              <p className="text-gray-900 mb-8">
                Get started quickly with our simple API. TurtleDB seamlessly integrates with your Java applications.
              </p>
              <div className="flex items-center gap-4 mb-4">
                <IconBadge icon={Package} />
                <div>
                  <h4 className="font-semibold">Installation</h4>
                  <p className="text-sm text-gray-900">Add to your Maven pom.xml</p>
                </div>
              </div>
              <CodeBlock language="xml">
                {
`<dependency>
   <groupId>io.github.nothiaki</groupId>
   <artifactId>turtledb-core</artifactId>
   <version>it will be available soon</version>
</dependency>`
                }
              </CodeBlock>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-4">
                <IconBadge icon={Code2} />
                <div>
                  <h4 className="font-semibold">Usage Example</h4>
                  <p className="text-sm text-gray-900">Simple usage</p>
                </div>
              </div>
              <CodeBlock language="java">
                {
`//TurtleDBConfig.java  //Spring implementation 
@Configuration
public class TurtleDBConfig {

  @Bean
  public TurtleDB init() {
    return new TurtleDB()
      .Builder()
      .storage("tdb")
      .build();
  };

}`
                }
              </CodeBlock>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="text-gray-900">
              Copyright &copy; 2025-present TurtleDB.
            </div>
            <div className="flex gap-6">
              <a href="docs" className="text-gray-900 hover:text-accent-500">Docs</a>
              <a
                href="https://github.com/nothiaki/TurtleDB"
                target="_blank" className="text-gray-900 hover:text-accent-500"
              >GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

