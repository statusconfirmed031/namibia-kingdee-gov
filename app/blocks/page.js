import styles from './blocks.module.css'
const blocks = [
  { id:'forms', label:'01', title:'Forms', subtitle:'Online Application Engine', what:'A digital form is the front door every citizen uses to request a government service. Instead of travelling to an office and filling in paper, the citizen opens a page on their phone or computer, fills in their details, uploads any required documents, and submits. The system stores everything instantly.', how:['Smart fields that auto-fill from the national ID database once the citizen enters their ID number','Document upload - citizen photographs their birth certificate or ID with their phone camera','Validation checks required fields are complete before submission','A unique reference number issued immediately so the citizen can track their case','Fully works on basic smartphones with slow internet connections'], used:['Home Affairs - birth certificates, IDs, passports','NamRA - tax return filing','Health - grant applications','Education - school enrolment and bursary applications','Trade - business licence applications','All 11 departments'] },
  { id:'payments', label:'02', title:'Payments', subtitle:'Government Fee Collection Gateway', what:'Most government services require a fee. The payment module lets citizens pay these fees digitally, directly from their phone or computer, without needing to visit a bank or carry cash to a government office.', how:['Integration with Namibian banks - FNB Namibia, Bank Windhoek, Standard Bank Namibia','Mobile money support for citizens without bank accounts','Automatic receipt generation with QR code for verification','Payment status linked directly to the application - a case only moves forward once payment is confirmed','Full audit trail so government can reconcile all fees collected'], used:['Road Authority - vehicle licence and driving test fees','Home Affairs - passport and ID fees','Trade - licence fees','Municipalities - rates and utility payments','Environment - park and permit fees'] },
  { id:'case-tracking', label:'03', title:'Case Tracking', subtitle:'Application Status Dashboard', what:'Once a citizen submits an application, they currently have no idea what is happening. They wait weeks, then travel back to the office to ask. Case tracking gives every application a live status the citizen can check at any time from their phone.', how:['Real-time status visible to citizen: Submitted, Under Review, Approved, Ready for Collection, Rejected','Internal view for officials showing all open cases, who owns each one, and how long it has been waiting','Escalation flags when a case has been sitting too long without action','AI agent automatically moves cases through stages for routine applications','Full history log of every action taken on a case with timestamps and officer names'], used:['Home Affairs - passport and ID applications','Health - grant applications','Agriculture - land applications','Labour - work permits and dispute cases','Welfare - child welfare cases'] },
  { id:'notifications', label:'04', title:'Notifications', subtitle:'Automated Citizen Communication', what:'The notification engine proactively contacts the citizen the moment anything changes with their application. No more travelling to an office to ask. The citizen gets an SMS or email automatically, triggered by the AI agent watching every status change in real time.', how:['SMS to the citizen when their application is received, approved, rejected, or ready for collection','Email notifications with full details and next steps','Reminder SMS if a citizen needs to provide missing documents','Payment confirmation immediately after a fee is processed','Works on any basic phone - does not require a smartphone or internet','Notifications available in English and Oshiwambo'], used:['Every single department - notifications are universal across all 11 ministries'] },
]
export default function BlocksPage() {
  return (
    <main>
      <header className={styles.header}>
        <a href="/" className={styles.back}>Back to overview</a>
        <div className={styles.logo}>Kingdee x Namibia</div>
      </header>
      <div className={styles.hero}>
        <div className={styles.eyebrow}>Core Building Blocks</div>
        <h1>The 4 components<br /><strong>every ministry needs</strong></h1>
        <p className={styles.heroDesc}>These four modules are the foundation of every government digital service. Kingdee builds them once. Every one of the 11 ministries uses them. This is why the approach saves cost and time.</p>
      </div>
      <div className={styles.blocksWrap}>
        {blocks.map(b => (
          <div key={b.id} id={b.id} className={styles.block}>
            <div className={styles.blockMeta}>
              <div className={styles.blockNum}>{b.label}</div>
              <div className={styles.blockTitle}>{b.title}</div>
              <div className={styles.blockSub}>{b.subtitle}</div>
            </div>
            <div className={styles.blockBody}>
              <p className={styles.blockWhat}>{b.what}</p>
              <div className={styles.blockSection}>
                <div className={styles.blockSectionLabel}>How it works</div>
                <ul className={styles.blockList}>{b.how.map(h => <li key={h}>{h}</li>)}</ul>
              </div>
              <div className={styles.blockSection}>
                <div className={styles.blockSectionLabel}>Used by</div>
                <ul className={styles.blockUsed}>{b.used.map(u => <li key={u}>{u}</li>)}</ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      <footer className={styles.footer}>
        <div className={styles.footerLogo}>Kingdee x Namibia</div>
        <p>Government Digital Services Roadmap - May 2026</p>
      </footer>
    </main>
  )
}