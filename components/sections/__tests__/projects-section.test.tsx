import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProjectsSection } from '../projects-section';
import { Project } from '@/lib/types'; // Import the Project type

// Mock AnimatedText component
jest.mock('@/components/animated-text', () => ({
  AnimatedText: ({ text }: { text: string }) => <span>{text}</span>,
}));

// Mock ProjectCard component
jest.mock('@/components/project-card', () => ({
  ProjectCard: jest.fn(({ title }: Project) => <div data-testid="project-card">{title}</div>),
}));

// Mock SectionLayout component
jest.mock('@/components/templates/section-layout', () => ({
  SectionLayout: ({ children, id }: { children: React.ReactNode, id: string }) => (
    <section id={id} data-testid="section-layout">
      {children}
    </section>
  ),
}));

// Mock lucide-react icons
jest.mock('lucide-react', () => ({
  Github: () => <svg data-testid="github-icon" />,
  ExternalLink: () => <svg data-testid="external-link-icon" />,
}));

// Import the actual projects data used by the component
const { projects } = jest.requireActual('../projects-section');

describe('ProjectsSection Component', () => {
  beforeEach(() => {
    // Clear mock calls before each test
    (jest.requireMock('@/components/project-card') as any).ProjectCard.mockClear();
  });

  it('renders the "PROJECTS" heading', () => {
    render(<ProjectsSection />);
    // AnimatedText mock renders the text directly
    expect(screen.getByText('PROJECTS')).toBeInTheDocument();
  });

  it('renders the "View All on GitHub" link with icons', () => {
    render(<ProjectsSection />);
    const githubLink = screen.getByRole('link', { name: /View All on GitHub/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/kumarpriyanshu09');
    expect(screen.getByTestId('github-icon')).toBeInTheDocument();
    expect(screen.getByTestId('external-link-icon')).toBeInTheDocument();
  });

  it('renders a ProjectCard for each project in the projects data', () => {
    render(<ProjectsSection />);
    const projectCards = screen.getAllByTestId('project-card');
    expect(projectCards).toHaveLength(projects.length);

    // Check if ProjectCard was called with the correct props for each project
    projects.forEach((project: Project) => {
      expect(jest.requireMock('@/components/project-card').ProjectCard).toHaveBeenCalledWith(
        expect.objectContaining({
          title: project.title,
          description: project.description,
          technologies: project.technologies,
          href: project.href,
          callToAction: project.callToAction,
        }),
        undefined // Accounting for the second argument (context/ref) which is undefined for this mock
      );
    });
  });
  
  it('renders SectionLayout wrapper with correct id', () => {
    render(<ProjectsSection />);
    expect(screen.getByTestId('section-layout')).toHaveAttribute('id', 'projects');
  });
});
