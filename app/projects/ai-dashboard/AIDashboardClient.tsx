"use client"

import { AnimatedText } from "@/components/animated-text"
import { TableauDashboard } from "@/components/tableau-dashboard"
import { useScrollTop } from "@/hooks/use-scroll-top"

function AIDashboardProjectClient() {
  // Use the scroll hook to ensure page loads at the top
  useScrollTop()

  return (
    <div className="px-4 md:px-10 max-w-4xl mx-auto">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-200 mb-4">
            <AnimatedText text="AI's Rise and Societal Impact" />
          </h1>
          <p className="text-xl text-gray-400">Interactive Data Visualization</p>
        </div>

        {/* Project Introduction */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-200">Project Introduction</h2>
          <div className="prose prose-invert max-w-none">
            <p>
              This interactive Tableau dashboard explores the multifaceted impact of artificial intelligence on
              industries, employment patterns, and broader society. By visualizing comprehensive data on AI adoption
              trends, automation risks, and the evolving job market, this project presents a data-driven narrative of
              one of the most transformative technological shifts of our time.
            </p>
            <p>
              As a data analyst with a keen interest in emerging technologies, I created this visualization to help
              organizations, professionals, and policymakers understand the complex implications of AI proliferation.
              The dashboard transforms raw data into actionable insights, enabling users to make informed decisions
              about workforce planning, skill development, and strategic investments in an AI-driven economy.
            </p>
          </div>
        </section>

        {/* Dashboard - Now using the actual Tableau embed */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-200">Interactive Dashboard</h2>
          <div className="rounded-lg border border-gray-800 overflow-hidden">
            <TableauDashboard />
          </div>
        </section>

        {/* Business Value */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-200">Business Value</h2>
          <div className="prose prose-invert max-w-none">
            <p>
              This dashboard delivers significant business value by providing decision-makers with critical intelligence
              on AI's impact across various domains:
            </p>
            <ul>
              <li>
                <strong>Strategic Planning:</strong> Organizations can identify which sectors are experiencing the most
                rapid AI adoption, allowing for more informed competitive positioning and investment decisions.
              </li>
              <li>
                <strong>Workforce Development:</strong> HR departments can anticipate automation risks across different
                roles, enabling proactive reskilling initiatives and talent acquisition strategies.
              </li>
              <li>
                <strong>Market Intelligence:</strong> Investors and business leaders can track global investment
                patterns in AI technologies, identifying emerging opportunities and potential market disruptions.
              </li>
              <li>
                <strong>Risk Management:</strong> The visualization of regulatory trends helps organizations anticipate
                compliance requirements and adjust their AI implementation strategies accordingly.
              </li>
              <li>
                <strong>Public Perception Tracking:</strong> Marketing teams can better understand shifting consumer
                sentiment toward AI, informing product development and communication strategies.
              </li>
            </ul>
            <p>
              By consolidating these insights into an interactive interface, the dashboard empowers stakeholders to
              extract actionable intelligence that could drive millions in strategic value through optimized workforce
              planning, targeted investments, and risk mitigation.
            </p>
          </div>
        </section>

        {/* Tools & Methodology */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-200">Tools & Methodology</h2>

          <div className="space-y-4">
            <h3 className="text-xl font-medium text-gray-300">Technical Approach</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-400">
              <li>
                <strong>Tableau Desktop:</strong> Leveraged for its robust visualization capabilities and interactive
                filtering options
              </li>
              <li>
                <strong>Interactive Elements:</strong> Created dynamic parameters, filters, and drill-down capabilities
                to enable exploratory analysis
              </li>
              <li>
                <strong>Design Principles:</strong> Applied strategic color theory, information hierarchy, and
                accessibility considerations throughout
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium text-gray-300">Data Sources</h3>
            <p className="text-gray-400">This project draws on authoritative data from multiple sources, including:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-400">
              <li>Data on AI job market trends from Kaggle datasets (Edwardan, 2024)</li>
              <li>AI adoption metrics from Stanford's AI Index Report 2024</li>
              <li>Tech industry workforce shifts documented by Ulrike Herold (2024)</li>
              <li>Labor market projections from the World Economic Forum's Future of Jobs Report 2023</li>
              <li>Economic impact analysis from leading research by Acemoglu & Restrepo (2019)</li>
              <li>Workforce transition data from McKinsey Global Institute (2017)</li>
              <li>Employment outlook projections from OECD (2019)</li>
            </ul>
            <p className="text-gray-400">
              The data underwent rigorous cleaning, normalization, and validation before visualization to ensure
              accuracy and relevance.
            </p>
          </div>
        </section>

        {/* Development Process */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-200">Development Process</h2>

          <div className="space-y-4">
            <h3 className="text-xl font-medium text-gray-300">Planning Phase</h3>
            <p className="text-gray-400">
              The project began with extensive research to identify the most relevant aspects of AI's impact that would
              provide value to users. I created initial wireframes to map out the information architecture and user flow
              through the dashboard.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium text-gray-300">Data Collection Challenges</h3>
            <p className="text-gray-400">
              Collecting consistent data across regions proved challenging, particularly for AI adoption metrics. I
              addressed this by normalizing datasets and creating composite indices where appropriate, ensuring
              meaningful cross-regional comparisons.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium text-gray-300">Iterative Design</h3>
            <p className="text-gray-400">
              The dashboard underwent multiple iterations based on user feedback. Early versions prioritized
              comprehensive data display, while later iterations focused on storytelling and user experience. I
              continuously refined filters and interactive elements to balance analytical depth with usability.
            </p>
          </div>
        </section>

        {/* Features & Functionality */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-200">Features & Functionality</h2>

          <div className="space-y-4">
            <h3 className="text-xl font-medium text-gray-300">Interactive Capabilities</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-400">
              <li>
                <strong>Global Filter Panel:</strong> Allows filtering by region, industry, time period, and technology
                type
              </li>
              <li>
                <strong>Drill-Down Architecture:</strong> Users can navigate from high-level trends to granular details
                about specific roles, regions, or technologies
              </li>
              <li>
                <strong>Custom Parameters:</strong> Dynamic adjustments for time horizons, risk thresholds, and
                investment categories
              </li>
              <li>
                <strong>Comparative Analysis:</strong> Side-by-side visualization of different regions, industries, or
                time periods
              </li>
              <li>
                <strong>Responsive Design:</strong> Optimized for both desktop analysis and tablet presentation
                scenarios
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium text-gray-300">Visual Components</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-400">
              <li>Heat maps displaying automation risk across job categories</li>
              <li>Time-series visualizations of AI investment trends</li>
              <li>Geographic distribution of AI job opportunities</li>
              <li>Regulatory response timeline with policy impact assessment</li>
              <li>Public sentiment tracking with demographic breakdown</li>
            </ul>
            <p className="text-gray-400">
              Each component was designed to work both independently and as part of an integrated analytical narrative.
            </p>
          </div>
        </section>

        {/* Key Insights */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-200">Key Insights</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3 p-4 rounded-lg border border-gray-800 bg-gray-900/50">
              <h3 className="text-lg font-medium text-gray-200">Global AI Investment Landscape</h3>
              <p className="text-gray-400 text-sm">
                The United States maintains a commanding lead with $67.2 billion in private AI investments in 2023,
                representing nearly triple the investment of its closest competitor. This concentration of capital has
                significant implications for global AI innovation distribution and potential technology transfer
                barriers.
              </p>
            </div>

            <div className="space-y-3 p-4 rounded-lg border border-gray-800 bg-gray-900/50">
              <h3 className="text-lg font-medium text-gray-200">Automation Risk Distribution</h3>
              <p className="text-gray-400 text-sm">
                Contrary to common assumptions, high-salary positions aren't immune to automation risk. The dashboard
                reveals that roles like Marketing Specialists (average salary: $106K) face significant disruption
                potential due to advancements in natural language processing and predictive analytics. This challenges
                conventional wisdom about which career paths offer long-term stability.
              </p>
            </div>

            <div className="space-y-3 p-4 rounded-lg border border-gray-800 bg-gray-900/50">
              <h3 className="text-lg font-medium text-gray-200">Industry Adoption Patterns</h3>
              <p className="text-gray-400 text-sm">
                While the technology sector leads with 36% AI adoption, the financial services industry follows closely
                at 31%, demonstrating faster-than-expected integration. Healthcare shows the steepest adoption curve,
                suggesting potential market opportunities for specialized AI solutions in clinical and operational
                contexts.
              </p>
            </div>

            <div className="space-y-3 p-4 rounded-lg border border-gray-800 bg-gray-900/50">
              <h3 className="text-lg font-medium text-gray-200">Job Market Transformation</h3>
              <p className="text-gray-400 text-sm">
                The dashboard visualizes how AI job postings have evolved beyond traditional computer science roles. By
                2022, machine learning skills appeared in 5.7% of all job postings across diverse fields including
                marketing, finance, and healthcare, indicating the mainstreaming of AI competencies.
              </p>
            </div>

            <div className="space-y-3 p-4 rounded-lg border border-gray-800 bg-gray-900/50 md:col-span-2">
              <h3 className="text-lg font-medium text-gray-200">Geographic Distribution of Opportunity</h3>
              <p className="text-gray-400 text-sm">
                The United States dominates the global AI job market with 55.1% of all job postings, followed by India
                at 14.96%. However, the visualization reveals emerging hubs in unexpected regions, with Southeast Asia
                showing the fastest growth rate in new AI positions (37% year-over-year).
              </p>
            </div>
          </div>
        </section>

        {/* Skills Demonstrated */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-200">Skills Demonstrated</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-3 rounded-lg border border-gray-800 bg-gray-900/50">
              <p className="text-gray-300 font-medium">Advanced Tableau Techniques</p>
              <p className="text-gray-400 text-sm">
                Custom calculations, parameters, sets, and level-of-detail expressions
              </p>
            </div>
            <div className="p-3 rounded-lg border border-gray-800 bg-gray-900/50">
              <p className="text-gray-300 font-medium">Data Transformation</p>
              <p className="text-gray-400 text-sm">
                Handling complex, multi-source datasets with varying granularity and structure
              </p>
            </div>
            <div className="p-3 rounded-lg border border-gray-800 bg-gray-900/50">
              <p className="text-gray-300 font-medium">Visual Design</p>
              <p className="text-gray-400 text-sm">
                Strategic use of color, shape, and space to maximize information density without compromising clarity
              </p>
            </div>
            <div className="p-3 rounded-lg border border-gray-800 bg-gray-900/50">
              <p className="text-gray-300 font-medium">Narrative Construction</p>
              <p className="text-gray-400 text-sm">
                Creating a cohesive analytical story that guides users through complex information
              </p>
            </div>
            <div className="p-3 rounded-lg border border-gray-800 bg-gray-900/50">
              <p className="text-gray-300 font-medium">User Experience Design</p>
              <p className="text-gray-400 text-sm">
                Balancing sophisticated analytical capabilities with intuitive navigation and interaction
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-200">Conclusion and Next Steps</h2>
          <div className="prose prose-invert max-w-none">
            <p>
              This interactive dashboard provides a comprehensive view of AI's impact across industries and geographies,
              serving as both an analytical tool and a strategic resource. The insights generated can help organizations
              navigate the rapidly evolving AI landscape with data-driven confidence.
            </p>
            <p>
              I invite you to explore this dashboard to uncover insights relevant to your organization or career path.
              The interactive elements allow you to filter and focus on the aspects most relevant to your context.
            </p>
            <p>
              I welcome discussions about the methodology, findings, or potential applications of this analysis. If
              you're interested in exploring how similar visualizations could provide value for your specific needs,
              please reach out through the contact information provided on my portfolio.
            </p>
            <p>
              This project demonstrates not only technical proficiency in data visualization but also my ability to
              transform complex datasets into strategic insights that drive business value.
            </p>
          </div>
        </section>

        {/* References */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-200">References</h2>
          <div className="space-y-2 text-sm text-gray-400">
            <p>
              Edwardan, K. (2024). AI-Powered Job Market Insights [Dataset]. Kaggle.
              https://www.kaggle.com/datasets/edwardan/ai-powered-job-market-insights
            </p>
            <p>
              Stanford Institute for Human-Centered Artificial Intelligence. (2024). AI Index Report 2024.
              https://hai.stanford.edu/ai-index/2024-ai-index-report
            </p>
            <p>
              Ulrike Herold. (2024). Tech Layoffs 2020–2024 [Dataset]. Kaggle.
              https://www.kaggle.com/datasets/ulrikeherold/tech-layoffs-2020-2024
            </p>
            <p>
              World Economic Forum. (2023). The Future of Jobs Report 2023.
              https://www.weforum.org/reports/the-future-of-jobs-report-2023
            </p>
            <p>
              Acemoglu, D., & Restrepo, P. (2019). Artificial Intelligence, Automation, and Work. NBER Working Paper No.
              24196. https://www.nber.org/papers/w24196
            </p>
            <p>
              McKinsey Global Institute. (2017). Jobs Lost, Jobs Gained: Workforce Transitions in a Time of Automation.
              https://www.mckinsey.com/featured-insights/future-of-work/jobs-lost-jobs-gained-what-the-future-of-work-will-mean-for-jobs-skills-and-wages
            </p>
            <p>
              OECD. (2019). The Future of Work: OECD Employment Outlook 2019.
              https://www.oecd.org/employment/Employment-Outlook-2019-Highlight-EN.pdf
            </p>
          </div>
        </section>

        {/* Removed the "View Interactive Dashboard" link as requested */}
      </div>
    </div>
  )
}

export default AIDashboardProjectClient
