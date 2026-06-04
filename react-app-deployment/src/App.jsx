import heroImage from './assets/aws-training-hero.png'
import './App.css'

const services = [
  {
    key: 'S3',
    name: 'Amazon S3',
    summary: 'Store website files, backups, logs, and media with durable object storage.',
    skills: ['Buckets and objects', 'Static hosting', 'Lifecycle rules'],
  },
  {
    key: 'CF',
    name: 'CloudFront',
    summary: 'Deliver content faster through global edge locations and caching behavior.',
    skills: ['Distributions', 'Origins', 'Cache policies'],
  },
  {
    key: 'EC2',
    name: 'Amazon EC2',
    summary: 'Launch virtual servers, connect securely, and deploy real applications.',
    skills: ['Instances', 'Security groups', 'Key pairs'],
  },
  {
    key: 'IAM',
    name: 'AWS IAM',
    summary: 'Control who can access AWS resources with users, roles, and policies.',
    skills: ['Users and groups', 'Roles', 'Least privilege'],
  },
]

const learningPath = [
  'Understand core cloud terms and AWS account structure.',
  'Host a static site in S3 and serve it through CloudFront.',
  'Deploy an app on EC2 with firewall rules and SSH access.',
  'Secure every step with IAM roles, policies, and access reviews.',
]

function App() {
  return (
    <main>
      <nav className="top-nav" aria-label="Primary navigation">
        <a className="brand" href="#hero" aria-label="AWS training home">
          <span className="brand-mark">AWS</span>
          <span>Cloud Training</span>
        </a>
        <div className="nav-links">
          <a href="#topics">Topics</a>
          <a href="#path">Path</a>
          <a href="#lab">Lab</a>
        </div>
      </nav>

      <section
        id="hero"
        className="hero"
        style={{ '--hero-image': `url(${heroImage})` }}
      >
        <div className="hero-content">
          <p className="eyebrow">S3 • CloudFront • EC2 • IAM</p>
          <h1>Learn AWS deployment from storage to secure access.</h1>
          <p className="hero-copy">
            A focused training site for understanding how AWS services work
            together to host, deliver, run, and protect modern web apps.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#topics">
              Start learning
            </a>
            <a className="secondary-action" href="#path">
              View roadmap
            </a>
          </div>
        </div>
      </section>

      <section id="topics" className="section">
        <div className="section-heading">
          <p className="eyebrow">Training modules</p>
          <h2>Build a practical AWS foundation</h2>
          <p>
            Each topic focuses on what the service does, when to use it, and
            how it connects to the rest of a deployed application.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.key}>
              <span className="service-icon">{service.key}</span>
              <h3>{service.name}</h3>
              <p>{service.summary}</p>
              <ul>
                {service.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="path" className="split-section">
        <div>
          <p className="eyebrow">Learning path</p>
          <h2>Move from concepts to deployment</h2>
          <p>
            The training sequence starts with fundamentals, then connects the
            services into a deployable architecture with security built in.
          </p>
        </div>
        <ol className="path-list">
          {learningPath.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>

      <section id="lab" className="lab-section">
        <div className="lab-copy">
          <p className="eyebrow">Hands-on outcome</p>
          <h2>Deploy the same architecture you study</h2>
          <p>
            Learners finish with a hosted front end, CDN delivery, a running
            compute environment, and access rules that follow least privilege.
          </p>
        </div>
        <div className="architecture" aria-label="AWS architecture flow">
          <span>Browser</span>
          <span>CloudFront</span>
          <span>S3</span>
          <span>EC2</span>
          <span>IAM</span>
        </div>
      </section>
    </main>
  )
}

export default App
