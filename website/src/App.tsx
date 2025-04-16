import React from 'react';
import {
  Github,
  Database,
  Clock,
  Code2,
  ArrowRight,
  Package,
  Zap
} from 'lucide-react';
import { Card } from './components/card';

export default function App() {

  const ghStars = 4;

  return (
    <div className="min-h-screen bg-primary-500">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-accent-500 mb-6">
              TurtleDB
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              A lightweight embedded database for Java with time travel queries
            </p>
            <div className="flex gap-4">
              <button className="bg-accent-500 text-primary-100 px-8 py-3 rounded-lg font-medium hover:bg-[#2b8a3e] transition-colors flex items-center gap-2">
                Documentation <ArrowRight size={20} />
              </button>
              <button className="bg-primary-100 text-gray-900 px-8 py-3 rounded-lg font-medium border border-gray-200 hover:bg-gray-50 transition-colors flex items-center gap-2">
                <Github size={20} /> GitHub {ghStars} stars
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Why Choose TurtleDB?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              icon={Database}
              title="Embedded Database"
              desc="Lightweight and self-contained, perfect for Java applications that need reliable data storage without external dependencies."
            />
            <Card
              icon={Clock}
              title="Time Travel Queries"
              desc="Access and restore historical data states with ease using our powerful time travel query capabilities."
            />
            <Card
              icon={Zap}
              title="High Performance"
              desc="Optimized for speed and efficiency, ensuring your applications run smoothly with minimal overhead."
            />
          </div>
        </div>
      </div>

      {/* Code Example Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Easy to Integrate
              </h2>
              <p className="text-gray-600 mb-8">
                Get started quickly with our simple API. TurtleDB seamlessly integrates with your Java applications.
              </p>
              <div className="flex items-center gap-4 mb-4">
                <Package className="text-[#2f9e44]" size={24} />
                <div>
                  <h4 className="font-semibold">Installation</h4>
                  <p className="text-sm text-gray-600">Add to your Maven pom.xml</p>
                </div>
              </div>
              <pre className="bg-gray-900 text-primary-100 p-4 rounded-lg overflow-x-auto">
                <code>{`<dependency>
  <groupId>com.turtledb</groupId>
  <artifactId>turtledb-core</artifactId>
  <version>1.0.0</version>
</dependency>`}</code>
              </pre>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-4">
                <Code2 className="text-[#2f9e44]" size={24} />
                <div>
                  <h4 className="font-semibold">Usage Example</h4>
                  <p className="text-sm text-gray-600">Simple time travel query</p>
                </div>
              </div>
              <pre className="bg-gray-900 text-primary-100 p-4 rounded-lg overflow-x-auto">
                <code>{`TurtleDB db = new TurtleDB("mydb");

// Insert data
db.insert("users")
  .value("name", "John")
  .value("age", 30)
  .execute();

// Time travel query
db.select("users")
  .asOf(timestamp)
  .where("age > ?", 25)
  .execute();`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="text-gray-600">
              © 2025 TurtleDB. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-600 hover:text-[#2f9e44]">Documentation</a>
              <a href="#" className="text-gray-600 hover:text-[#2f9e44]">GitHub</a>
              <a href="#" className="text-gray-600 hover:text-[#2f9e44]">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

