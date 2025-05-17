import { AnimatedText } from "@/components/animated-text"
import { ExcelDashboard } from "@/components/excel-dashboard"

export const metadata = {
  title: "Healthcare Sales Performance Dashboard | Priyanshu Kumar",
  description: "Interactive Excel dashboard to analyze healthcare sales performance against yearly targets",
}

export default function HealthcareSalesProject() {
  return (
    <div className="px-4 md:px-10 max-w-4xl mx-auto">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-200 mb-4">
            <AnimatedText text="Healthcare Sales Performance Dashboard" />
          </h1>
          <p className="text-xl text-gray-400">Interactive Excel Analysis</p>
        </div>

        {/* Project Overview */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-200">Project Overview</h2>
          <div className="prose prose-invert max-w-none">
            <p>
              In this project, I developed an interactive Excel dashboard to analyze a healthcare company's sales
              performance against yearly targets. The dashboard tracks two key metrics—revenue and covered lives (number
              of people using our services)—providing a comprehensive view of business performance through an intuitive
              interface.
            </p>
          </div>
        </section>

        {/* Dashboard - Now using the actual Excel embed */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-200">Interactive Dashboard</h2>
          <div className="rounded-lg border border-gray-800 overflow-hidden">
            <ExcelDashboard />
          </div>
        </section>

        {/* Why Excel */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-200">Why Excel?</h2>
          <div className="prose prose-invert max-w-none">
            <p>
              While there are many advanced data visualization tools available, I chose Excel for several strategic
              reasons:
            </p>
            <ul>
              <li>
                <strong>Accessibility:</strong> Excel is widely used across organizations, making the dashboard
                immediately accessible to stakeholders without requiring specialized software.
              </li>
              <li>
                <strong>Rapid Development:</strong> The built-in formulas and visualization capabilities allowed for
                quick implementation of a functional dashboard within tight timeframes.
              </li>
              <li>
                <strong>Interactive Capabilities:</strong> Using data validation and conditional formatting, I created a
                responsive dashboard that updates dynamically as users filter the data.
              </li>
              <li>
                <strong>Familiarity:</strong> Most business users are comfortable with Excel, reducing the learning
                curve and increasing adoption rates.
              </li>
            </ul>
          </div>
        </section>

        {/* The Challenge */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-200">The Challenge</h2>
          <div className="prose prose-invert max-w-none">
            <p>
              The sales team needed to quickly assess how actual performance compared to targets across different
              booking types (new business vs. renewals). Making data-driven decisions required:
            </p>
            <ul>
              <li>Tracking cumulative performance throughout the year</li>
              <li>Identifying variances between actual results and targets</li>
              <li>Visualizing trends to spot patterns and potential issues</li>
              <li>Creating a user-friendly interface for non-technical stakeholders</li>
            </ul>
          </div>
        </section>

        {/* My Approach */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-200">My Approach: Clarity Over Complexity</h2>
          <div className="prose prose-invert max-w-none">
            <p>When designing the dashboard, I prioritized user experience by:</p>
            <ul>
              <li>
                Creating a simple filtering system that allows users to view data by total, new bookings, or renewals
                with a single dropdown
              </li>
              <li>
                Using conditional formatting to provide immediate visual cues (red for negative variances, green for
                positive)
              </li>
              <li>Implementing rolling totals to show cumulative performance rather than just monthly figures</li>
              <li>Displaying key metrics prominently with large, easy-to-read KPIs</li>
              <li>Maintaining consistent formatting throughout to improve readability</li>
            </ul>
          </div>
        </section>

        {/* Key Discoveries */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-200">Key Discoveries</h2>
          <div className="prose prose-invert max-w-none">
            <p>The dashboard revealed several important insights:</p>
            <ul>
              <li>Overall revenue fell short of yearly targets by 5.9%</li>
              <li>New bookings consistently underperformed throughout the year</li>
              <li>Renewal business showed stronger performance relative to targets</li>
              <li>Certain months showed significant variance that warranted further investigation</li>
            </ul>
          </div>
        </section>

        {/* Technical Implementation */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-200">Technical Implementation</h2>
          <div className="prose prose-invert max-w-none">
            <p>The project demonstrates my proficiency in:</p>
            <ul>
              <li>
                <strong>Excel formulas:</strong> Advanced functions including SUMIFS and nested IF statements
              </li>
              <li>
                <strong>Data validation:</strong> Creating interactive filtering capabilities
              </li>
              <li>
                <strong>Conditional formatting:</strong> Visual indicators for performance metrics
              </li>
              <li>
                <strong>Dashboard design:</strong> Effective layout and visualization principles
              </li>
              <li>
                <strong>Data analysis:</strong> Converting raw data into actionable business insights
              </li>
            </ul>
          </div>
        </section>

        {/* Implementation Screenshots */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-200">Dashboard Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3 p-4 rounded-lg border border-gray-800 bg-gray-900/50">
              <h3 className="text-lg font-medium text-gray-200">Dynamic Filtering</h3>
              <p className="text-gray-400 text-sm">
                Users can filter data by booking type (Total, New Bookings, Renewals) with a simple dropdown menu,
                instantly updating all charts and KPIs.
              </p>
            </div>
            <div className="space-y-3 p-4 rounded-lg border border-gray-800 bg-gray-900/50">
              <h3 className="text-lg font-medium text-gray-200">Visual KPIs</h3>
              <p className="text-gray-400 text-sm">
                Key performance indicators display actual vs. target metrics with conditional formatting to highlight
                performance at a glance.
              </p>
            </div>
            <div className="space-y-3 p-4 rounded-lg border border-gray-800 bg-gray-900/50">
              <h3 className="text-lg font-medium text-gray-200">Trend Analysis</h3>
              <p className="text-gray-400 text-sm">
                Line charts show monthly and cumulative performance against targets, making it easy to identify trends
                and potential issues.
              </p>
            </div>
            <div className="space-y-3 p-4 rounded-lg border border-gray-800 bg-gray-900/50">
              <h3 className="text-lg font-medium text-gray-200">Variance Reporting</h3>
              <p className="text-gray-400 text-sm">
                Detailed variance analysis shows both absolute and percentage differences between actual and target
                performance for each metric.
              </p>
            </div>
          </div>
        </section>

        {/* Value Delivered */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-200">Value Delivered</h2>
          <div className="prose prose-invert max-w-none">
            <p>
              This dashboard provided stakeholders with an immediate understanding of sales performance without having
              to manually analyze complex spreadsheets. By highlighting variances and trends, it enabled:
            </p>
            <ul>
              <li>Quicker identification of performance gaps</li>
              <li>More informed decision-making</li>
              <li>Easier communication of results to leadership</li>
              <li>A foundation for setting more realistic future targets</li>
            </ul>
          </div>
        </section>

        {/* Conclusion */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-200">Conclusion</h2>
          <div className="prose prose-invert max-w-none">
            <p>
              This project demonstrates my ability to transform raw business data into an intuitive, interactive tool
              that drives decision-making. By focusing on company metrics that matter and prioritizing clarity over
              complexity, I delivered a solution that provides immediate value to stakeholders without overwhelming them
              with unnecessary information.
            </p>
          </div>
        </section>

        {/* Removed the "View Interactive Dashboard" link as requested */}
      </div>
    </div>
  )
}
