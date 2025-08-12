"use client";

import ProjectPageLayout from '@/components/layout/project-page-layout';
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/animated-text";
import Link from "next/link";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function BitBotClient() {
  return (
    <ProjectPageLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-200 mb-4">
            <AnimatedText text="BitBot - Smart Crypto Assistant" />
          </h1>
          <p className="text-xl text-gray-400">AI-Powered Cryptocurrency Guide</p>
        </div>
        {/* Project Overview */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-200">Project Overview</h2>
          <div className="prose prose-invert max-w-none">
            <p>
              BitBot is a chatbot designed to help users understand cryptocurrency in simple terms. The crypto market is
              complex and constantly evolving, making it difficult for new users to access reliable and
              easy-to-understand information. BitBot solves this problem by leveraging Large Language Models (LLMs) to
              provide structured responses while minimizing misinformation through controlled query handling.
            </p>
          </div>
        </section>
        {/* Project Overview Image */}
        <div className="max-w-3xl mx-auto my-8">
          <AspectRatio ratio={16 / 9} className="bg-gray-900 border border-gray-800 rounded-lg shadow">
            <Image
              src="https://7qd5tdgxs26x480g.public.blob.vercel-storage.com/projects/Bitbot/Latest%20Crypto%20News-Tf5GLsyHcqSyX8oe7WauTVGK2E7zpc.png"
              alt="BitBot showing latest crypto news"
              fill
              className="object-contain rounded-lg"
              priority
            />
          </AspectRatio>
        </div>
        {/* Business Problem */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-200">Business Problem</h2>
          <div className="prose prose-invert max-w-none">
            <p>Many users struggle to grasp cryptocurrency concepts due to the following reasons:</p>
            <ul>
              <li>Lack of accessible and reliable platforms for foundational crypto knowledge.</li>
              <li>Limited tools that provide real-time updates in an intuitive conversational format.</li>
              <li>High risk of misinformation due to AI hallucinations in non-specialized models.</li>
            </ul>
          </div>
        </section>
        {/* Solution Approach */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-200">Solution Approach</h2>
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-gray-300">Step 1: Identifying User Needs</h3>
            <p className="text-gray-400">
              We started by brainstorming common pain points for users trying to understand the crypto market. Users
              need a reliable assistant that can:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-400">
              <li>Explain fundamental crypto concepts.</li>
              <li>Provide real-time market updates.</li>
              <li>Restrict responses to financial topics to prevent AI hallucinations.</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-gray-300">Step 2: Workflow Design & Implementation</h3>
            <p className="text-gray-400">
              BitBot's approach includes multiple LLMs and an orchestrated workflow using Dify, an open-source LLM app
              development platform.
            </p>
            <div className="space-y-2">
              <h4 className="text-lg font-medium text-gray-300">Chatbot Process:</h4>
              <ol className="list-decimal pl-5 space-y-2 text-gray-400">
                <li>
                  <strong>User Query Input</strong> - The user asks a question.
                </li>
                <li>
                  <strong>Question Classification</strong> - Query categorization into three classes.
                </li>
                <li>
                  <strong>Knowledge Retrieval or Web Scraping</strong> - Data gathering based on query type.
                </li>
                <li>
                  <strong>Response Generation Using LLMs</strong> - Processing and structuring the data.
                </li>
                <li>
                  <strong>Final Answer Display</strong> - Delivering clear and informative response.
                </li>
              </ol>
            </div>
          </div>
        </section>
        {/* Technology Stack */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-200">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3 p-4 rounded-lg border border-gray-800 bg-gray-900/50">
              <h3 className="text-lg font-medium text-gray-200">Dify</h3>
              <p className="text-gray-400 text-sm">
                Used for workflow orchestration and deployment, providing a structured framework for the chatbot's
                operation.
              </p>
            </div>
            <div className="space-y-3 p-4 rounded-lg border border-gray-800 bg-gray-900/50">
              <h3 className="text-lg font-medium text-gray-200">Multiple LLM APIs</h3>
              <p className="text-gray-400 text-sm">
                Integrated Gemini 1.5 Pro and OpenAI models for response generation, leveraging the strengths of
                different models.
              </p>
            </div>
            <div className="space-y-3 p-4 rounded-lg border border-gray-800 bg-gray-900/50">
              <h3 className="text-lg font-medium text-gray-200">Web Scraping Module</h3>
              <p className="text-gray-400 text-sm">
                Custom module for fetching real-time market updates from reliable cryptocurrency data sources.
              </p>
            </div>
            <div className="space-y-3 p-4 rounded-lg border border-gray-800 bg-gray-900/50">
              <h3 className="text-lg font-medium text-gray-200">RAG (Retrieval Augmented Generation)</h3>
              <p className="text-gray-400 text-sm">
                Implemented for knowledge-based responses, ensuring accuracy by grounding answers in verified
                information.
              </p>
            </div>
          </div>
        </section>
        {/* Workflow Diagram */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-200">BitBot Workflow</h2>
          <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
            <div className="text-center mb-6">
              <p className="text-gray-400">BitBot Processing Pipeline</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="p-3 rounded-lg border border-gray-800 bg-black/50 text-center">
                <p className="text-gray-300 font-medium">User Query</p>
                <p className="text-gray-400 text-xs mt-2">Input question</p>
              </div>
              <div className="p-3 rounded-lg border border-gray-800 bg-black/50 text-center">
                <p className="text-gray-300 font-medium">Classification</p>
                <p className="text-gray-400 text-xs mt-2">Query categorization</p>
              </div>
              <div className="p-3 rounded-lg border border-gray-800 bg-black/50 text-center">
                <p className="text-gray-300 font-medium">Data Gathering</p>
                <p className="text-gray-400 text-xs mt-2">RAG or web scraping</p>
              </div>
              <div className="p-3 rounded-lg border border-gray-800 bg-black/50 text-center">
                <p className="text-gray-300 font-medium">LLM Processing</p>
                <p className="text-gray-400 text-xs mt-2">Response generation</p>
              </div>
              <div className="p-3 rounded-lg border border-gray-800 bg-black/50 text-center">
                <p className="text-gray-300 font-medium">User Response</p>
                <p className="text-gray-400 text-xs mt-2">Final answer</p>
              </div>
            </div>
          </div>
        </section>
        {/* BitBot Workflow Image */}
        <div className="max-w-3xl mx-auto my-8">
          <AspectRatio ratio={16 / 9} className="bg-gray-900 border border-gray-800 rounded-lg shadow">
            <Image
              src="https://7qd5tdgxs26x480g.public.blob.vercel-storage.com/projects/Bitbot/Latest%20Crypto%20News-Tf5GLsyHcqSyX8oe7WauTVGK2E7zpc.png"
              alt="BitBot workflow diagram"
              fill
              className="object-contain rounded-lg"
              priority
            />
          </AspectRatio>
        </div>
        {/* Business Value */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-200">Business Value</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3 p-4 rounded-lg border border-gray-800 bg-gray-900/50">
              <h3 className="text-lg font-medium text-gray-200">Education & User Engagement</h3>
              <p className="text-gray-400 text-sm">
                Financial companies can use BitBot to educate their users about cryptocurrency and investment
                opportunities.
              </p>
            </div>
            <div className="space-y-3 p-4 rounded-lg border border-gray-800 bg-gray-900/50">
              <h3 className="text-lg font-medium text-gray-200">24/7 Availability</h3>
              <p className="text-gray-400 text-sm">
                Unlike human advisors, BitBot is always available, ensuring users get instant responses at any time.
              </p>
            </div>
            <div className="space-y-3 p-4 rounded-lg border border-gray-800 bg-gray-900/50">
              <h3 className="text-lg font-medium text-gray-200">Reduced Operational Costs</h3>
              <p className="text-gray-400 text-sm">
                By automating customer education, financial institutions can reduce the workload on customer support
                teams.
              </p>
            </div>
            <div className="space-y-3 p-4 rounded-lg border border-gray-800 bg-gray-900/50">
              <h3 className="text-lg font-medium text-gray-200">Minimized AI Hallucinations</h3>
              <p className="text-gray-400 text-sm">
                The chatbot is restricted to financial topics, ensuring accurate and relevant information is provided.
              </p>
            </div>
            <div className="space-y-3 p-4 rounded-lg border border-gray-800 bg-gray-900/50">
              <h3 className="text-lg font-medium text-gray-200">Easy Deployment & Maintenance</h3>
              <p className="text-gray-400 text-sm">
                BitBot can be quickly deployed with minimal upkeep, allowing companies to focus on product innovation.
              </p>
            </div>
            <div className="space-y-3 p-4 rounded-lg border border-gray-800 bg-gray-900/50">
              <h3 className="text-lg font-medium text-gray-200">Scalability</h3>
              <p className="text-gray-400 text-sm">
                The system is designed to be easily upgraded, allowing new financial data or services to be integrated
                seamlessly.
              </p>
            </div>
          </div>
        </section>
        {/* Future Enhancements */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-200">Future Enhancements</h2>
          <div className="prose prose-invert max-w-none">
            <ul>
              <li>Expand its knowledge base with specialized materials for enhanced accuracy</li>
              <li>Integrate a 7-day graphical trend visualization for crypto market analysis</li>
              <li>Enhance response personalization based on user behavior and preferences</li>
              <li>Implement Dify-powered evaluation for continuous improvement</li>
            </ul>
          </div>
        </section>
        {/* Conclusion */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-200">Conclusion</h2>
          <div className="prose prose-invert max-w-none">
            <p>
              BitBot is a powerful AI-driven assistant tailored for cryptocurrency education and real-time market
              updates. With a structured workflow, multi-LLM integration, and strict domain restrictions, it ensures
              accurate, reliable, and user-friendly financial guidance. Whether for individuals learning about crypto or
              financial firms enhancing their user engagement, BitBot delivers value efficiently and effectively.
            </p>
          </div>
        </section>
      </div>
    </ProjectPageLayout>
  );
}
