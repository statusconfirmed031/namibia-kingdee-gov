import styles from './page.module.css'
import { departments, priorities, aiAgents } from './data'

const tagClass = { coral: styles.tCoral, purple: styles.tPurple, teal: styles.tTeal, amber: styles.tAmber }

export default function Home() {
  return (
    <main>
      <header className={styles.header}>
        <div className={styles.logo}>Kingdee x Namibia</div>
        <nav className={styles.nav}>
          <a href="#context">Context</a>
          <a href="#agents">AI Agents</a>
          <a href="#departments">Departments</a>
          <a href="#priorities">Priorities</a>
        </nav>
      </header>

      <div className={styles.hero}>
        <div className={styles.eyebrow}>Government Digital Services - Roadmap</div>
        <h1>What Namibia needs<br /><strong>Kingdee to build</strong></h1>
        <p className={styles.heroDesc}>A department-by-department breakdown of citizen-facing government tasks translated into plain development requirements and commercial priorities for Kingdee R&D and commercial teams.</p>
        <div className={styles.stats}>
          {[{n:'11',l:'Departments'},{n:'40+',l:'Citizen tasks'},{n:'6',l:'AI Agents'},{n:'2.5M',l:'Namibians'}].map(s => (
            <div key={s.l} className={styles.stat}>
              <div className={styles.statN}>{s.n}</div>
              <div className={styles.statL}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={`${styles.section} ${styles.contextSection}`} id="context">
        <div className={styles.sectionLabel}>Context</div>
        <h2>Why Kingdee, and why now</h2>
        <p className={styles.sectionDesc}>Namibia has a Digital First Services for All roadmap running from 2024 to 2026 that calls for digitising its top public services. Kingdee is positioned to deliver the ERP Backbone by deploying in-front (THE API AGENTS) that performs the gov tasks.</p>
        <div className={styles.contextGrid}>
          {[
            {n:'01',h:'Reusable components save cost',p:'Nearly every department needs the same 4 building blocks - forms, payments, case tracking, and notifications. Build once, deploy everywhere across all ministries.'},
            {n:'02',h:'Namibia localisation is required from day one',p:'Namibia Dollar (NAD), local bank integrations, NamRA tax rules, and a national ID authentication layer must all be built in - not added later.'},
            {n:'03',h:'Citizens are still waiting in physical queues',p:'Home Affairs, NamRA, and Road Authority have the highest daily foot traffic and the most obvious pain. These are the fastest commercial wins for Kingdee.'},
            {n:'04',h:'One login must work across all services',p:'A shared national ID identity layer is the backbone. Without it, each ministry builds its own silo and citizens re-register on every single portal.'},
          ].map(c => (
            <div key={c.n} className={styles.contextItem}>
              <div className={styles.contextNum}>{c.n}</div>
              <h3>{c.h}</h3>
              <p>{c.p}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.section} id="agents">
        <div className={styles.sectionLabel}>AI Agents</div>
        <h2>The stack explained</h2>
        <p className={styles.sectionDesc}>AI agents are the automated workers sitting on top of Kingdee ERP and Huawei infrastructure. They do the routine work 24 hours a day, without a lunch break.</p>

        <div className={styles.stackDiagram}>
          <div className={styles.stackTop}>
            <div className={styles.stackLabel}>AI Agents</div>
            <div className={styles.stackDesc}>The workers - verify documents, calculate tax, route cases, send notifications, detect fraud, allocate land</div>
          </div>
          <div className={styles.stackArrow}>runs on</div>
          <div className={styles.stackMid}>
            <div className={styles.stackLabel}>Kingdee ERP</div>
            <div className={styles.stackDesc}>The office system - workflows, citizen records, payments, approvals, audit trails</div>
          </div>
          <div className={styles.stackArrow}>runs on</div>
          <div className={styles.stackBot}>
            <div className={styles.stackLabel}>Huawei Infrastructure</div>
            <div className={styles.stackDesc}>The building - servers, cloud, network, security across Namibia</div>
          </div>
        </div>

        <div className={styles.agentGrid}>
          {aiAgents.map(a => (
            <div key={a.name} className={styles.agentCard}>
              <div className={styles.agentName}>{a.name}</div>
              <div className={styles.agentCompare}>
                <div className={styles.agentCol}>
                  <div className={styles.agentWithout}>Without agent</div>
                  <p>{a.without}</p>
                </div>
                <div className={styles.agentDivider} />
                <div className={styles.agentCol}>
                  <div className={styles.agentWith}>With agent</div>
                  <p>{a.with}</p>
                </div>
              </div>
              <div className={styles.agentApplies}>
                {a.applies.map(d => <span key={d} className={styles.agentTag}>{d}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.section} id="departments">
        <div className={styles.sectionLabel}>Department breakdown</div>
        <h2>Every department. Every citizen task.</h2>
        <p className={styles.sectionDesc}>What citizens need to do and exactly what Kingdee needs to build or customise to make it happen.</p>
        <div className={styles.legend}>
          <span className={styles.badge + ' ' + styles.bCoral}>Citizen Portal</span>
          <span className={styles.badge + ' ' + styles.bPurple}>Finance and Payments</span>
          <span className={styles.badge + ' ' + styles.bTeal}>HR and Workforce</span>
          <span className={styles.badge + ' ' + styles.bAmber}>Procurement and Assets</span>
        </div>
        <div className={styles.tableWrap}>
          <div className={styles.tableHead}>
            <span>Department</span><span>Citizen needs</span><span>Kingdee builds</span><span>Module type</span>
          </div>
          {departments.map(d => (
            <div key={d.code} className={styles.deptRow}>
              <div><div className={styles.deptCode}>{d.code}</div><div className={styles.deptName}>{d.name}</div></div>
              <ul className={styles.items}>{d.needs.map(n => <li key={n}>{n}</li>)}</ul>
              <ul className={styles.items + ' ' + styles.build}>{d.builds.map(b => <li key={b}>{b}</li>)}</ul>
              <div className={styles.tags}>{d.tags.map(t => <span key={t.label} className={styles.tag + ' ' + tagClass[t.type]}>{t.label}</span>)}</div>
            </div>
          ))}
        </div>
        <div className={styles.foundation}>
          <h4>Cross-cutting foundation - must be built first</h4>
          <p>Kingdee must build a shared <strong>Namibia Government Identity Layer</strong> - a single login using the national ID number so a citizen authenticates once and accesses all portals without re-registering. Without this backbone, every ministry becomes a silo.</p>
        </div>
      </div>

      <div className={styles.section} id="priorities">
        <div className={styles.sectionLabel}>Commercial strategy</div>
        <h2>Where to start</h2>
        <p className={styles.sectionDesc}>Not all departments have equal urgency. These six have the clearest path to a signed contract and visible public impact.</p>
        <div className={styles.phasesContainer}>
          {['p1', 'p2', 'p3'].map((tier, idx) => (
            <div key={tier} className={styles.phaseGroup}>
              <h3 className={styles.phaseHeading}>Phase {idx + 1}</h3>
              <div className={styles.priorityGrid}>
                {priorities.filter(p => p.tier === tier).map(p => (
                  <div key={p.title} className={`${styles.pCard} ${styles[p.tier]}`}>
                    <div className={styles.pTier}>{p.tierLabel}</div>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                    <div className={styles.pReason}><strong>Why Kingdee wins here</strong>{p.reason}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerLogo}>Kingdee x Namibia</div>
        <p>Government Digital Services Roadmap - For Kingdee R&D and Commercial Teams - May 2026</p>
      </footer>
    </main>
  )
}
