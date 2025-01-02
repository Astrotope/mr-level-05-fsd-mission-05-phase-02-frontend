import { Container } from '@/components/Container';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { ContactForm } from '@/components/ContactForm/ContactForm';
import styles from './Home.module.scss';

export const Home = () => {

  return (
    <Container 
      maxWidth="lg" 
      padding="md" 
      direction="column"
      alignItems="center"
      justifyContent="start"
      wrap="wrap"
      className={styles.mainContainer}
    >
      {/* Hero Section */}
      <section className={styles.hero}>
        <Container direction="row" gap="none" wrap="wrap" alignItems="center" className={styles.heroContent} padding="lg">
        <Card variant="transparent" className={styles.heroCard}>
            <h3 className={styles.title_small}>Hi, my name is</h3>
            <h1 className={styles.title}>Cameron McEwing.</h1>
            <p className={styles.subtitle}>I build beautiful, simple things for the web, that are kind to humans.</p>
            <Button variant="primary" size="large" className={styles.heroButton}>
              View My Work
            </Button>
          </Card>
          <Card variant="transparent" className={styles.heroCard}>
            <img 
                  src={`images/avatar-framed-light.png`} 
                  alt="Profile Avatar" 
                  className={styles.heroImage}
            />
          </Card>
        </Container>
      </section>

      {/* About Section */}
      <section className={styles.section}>
        <Container direction="column" gap="lg" alignItems="center" padding="lg">
          <h2 className={styles.sectionTitle}>About Me</h2>
          <Card variant="outlined" className={styles.aboutCard}>
            <p>Your professional summary goes here... Your professional summary goes here... Your professional summary goes here... Your professional summary goes here...</p>
          </Card>
        </Container>
      </section>

      {/* Skills Section */}
      <section className={styles.section}>
        <Container direction="column" gap="lg" alignItems="center" justifyContent="center"padding="lg">
          <h2 className={styles.sectionTitle}>Skills</h2>
          <Container gap="md" wrap="wrap" justifyContent="start">
            {/* Add skill cards here */}
            <Card variant="outlined" className={styles.skillCard}>
              <h3>Frontend</h3>
              <ul>
                <li>React</li>
                <li>TypeScript</li>
                <li>Headless UI</li>
                <li>Semantic UI</li>
                <li>Tailwind CSS</li>
              </ul>
            </Card>
            {/* Add more skill cards */}
            <Card variant="outlined" className={styles.skillCard}>
              <h3>Backend</h3>
              <ul>
                <li>Node</li>
                <li>Express</li>
                <li>Deno</li>
                <li>Hono</li>
                <li>FastAPI</li>
                <li>Flask</li>
              </ul>
            </Card>
            <Card variant="outlined" className={styles.skillCard}>
              <h3>GenAI</h3>
              <ul>
                <li>OpenAI API</li>
                <li>Google GenAI SDK</li>
                <li>Azure ML</li>
                <li>Semantic Search</li>
                <li>AI Assistants</li>
                <li>Tensor Flow</li>
                <li>LangChain</li>
                <li>RAG</li>
              </ul>
            </Card>
            <Card variant="outlined" className={styles.skillCard}>
              <h3>Cloud Services</h3>
              <ul>
                <li>Azure Services</li>
                <li>AWS S3, ECS</li>
                <li>Heroku</li>
                <li>Render</li>
                <li>Cloudflare</li>
              </ul>
            </Card>
            <Card variant="outlined" className={styles.skillCard}>
              <h3>DevOps</h3>
              <ul>
                <li>Docker</li>
                <li>Docker Swarm</li>
                <li>GitHub Workflows</li>
                <li>Kubernetes</li>
              </ul>
            </Card>
            <Card variant="outlined" className={styles.skillCard}>
              <h3>Databases</h3>
              <ul>
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>Redis</li>
                <li>DuckDB</li>
                <li>SQLite</li>
                <li>QDrant, ChromaDB</li>
              </ul>
            </Card>
            <Card variant="outlined" className={styles.skillCard}>
              <h3>Languages</h3>
              <ul>
                <li>Python</li>
                <li>TypeScript</li>
                <li>JavaScript</li>
                <li>Java</li>
                <li>HTML/CSS</li>
                <li>SQL</li>
                <li>JSON/YAML</li>
                <li>YAML</li>
              </ul>
            </Card>            
          </Container>
        </Container>
      </section>

      {/* Projects Section */}
      <section className={styles.section}>
        <Container direction="column" gap="lg" alignItems="center" justifyContent="center" padding="lg">
          <h2 className={styles.sectionTitle}>Projects</h2>
          <Container gap="lg" wrap="wrap" justifyContent="start">
            {/* Add project cards here */}
            <Card variant="outlined" hoverable className={styles.projectCard}>
              <img 
                src={`images/avatar-framed-light.png`} 
                alt="Profile Avatar" 
                className={styles.themeImage}
              />
              <div className={styles.projectContent}>
                <h3>Project Name</h3>
                <p>Project description goes here... Project description goes here... Project description goes here... Project description goes here... Project description goes here...</p>
                <Container gap="sm">
                  <Button variant="primary" size="medium">View Demo</Button>
                  <Button variant="accent" size="medium">Source Code</Button>
                </Container>
              </div>
            </Card>
            <Card variant="outlined" hoverable className={styles.projectCard}>
              <img 
                src={`images/avatar-framed-light.png`} 
                alt="Profile Avatar" 
                className={styles.themeImage}
              />
              <div className={styles.projectContent}>
                <h3>Project Name</h3>
                <p>Project description goes here... Project description goes here... Project description goes here... Project description goes here... Project description goes here...</p>
                <Container gap="sm">
                  <Button variant="primary" size="medium">View Demo</Button>
                  <Button variant="accent" size="medium">Source Code</Button>
                </Container>
              </div>
            </Card>
            {/* Add more project cards */}
          </Container>
        </Container>
      </section>

      {/* Contact Section */}
      <section className={styles.section}>
        <Container direction="column" gap="lg" alignItems="center" padding="lg">
          <h2 className={styles.sectionTitle}>Get in Touch</h2>
          <Container direction="column" gap="lg" alignItems="center">
            <p className={styles.contactText}>
              I'm always open to new opportunities and collaborations. 
              Feel free to reach out!
            </p>
            <Card variant="outlined" className={styles.contactCard}>
              <ContactForm />
            </Card>
            <Container gap="md" direction="row" className={styles.socialLinks}>
              <Button variant="primary" size="medium">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </Button>
              <Button variant="primary" size="medium">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </Button>
              <Button variant="accent" size="medium">
                <a href="mailto:your.email@example.com">
                  Email
                </a>
              </Button>
            </Container>
          </Container>
        </Container>
      </section>
    </Container>
  );
};
