import { createAboutSection } from './components/About/About';
import { createAiSummarySection } from './components/AiSummary/AiSummary';
import { createCertificateSection } from './components/Certificate/Certificate';
import { createContactFormSection } from './components/ContactForm/ContactForm';
import { createFooter } from './components/Footer/Footer';
import { createHeroSection } from './components/Hero/Hero';
import { createProjectsSection } from './components/Projects/Projects';
import { createWorkflowSection } from './components/Workflow/Workflow';

export function createApp(root: HTMLElement): void {
  root.replaceChildren(
    createHeroSection(),
    createAboutSection(),
    createWorkflowSection(),
    createProjectsSection(),
    createCertificateSection(),
    createAiSummarySection(),
    createContactFormSection(),
    createFooter(),
  );
}
