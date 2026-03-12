const photos = [
  {
    src: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=900&q=80",
    caption: "The kind of smile that fixes bad days."
  },
  {
    src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=900&q=80",
    caption: "Every little moment with you feels rare."
  },
  {
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
    caption: "You turned ordinary days into memories."
  },
  {
    src: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=900&q=80",
    caption: "If peace had a face, it would look like you."
  }
]

const timeline = [
  {
    title: "When it all began",
    text: "That first conversation still feels special in a way I can’t explain."
  },
  {
    title: "The comfort stage",
    text: "Somewhere between random talks and late replies, you became home."
  },
  {
    title: "The beautiful chaos",
    text: "The teasing, the care, the tiny fights, the love — all of it became my favorite story."
  },
  {
    title: "Today",
    text: "Today is about celebrating you — your smile, your heart, your existence."
  }
]

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(180deg, #2b0017 0%, #14000b 45%, #05010a 100%)",
    color: "white",
    padding: "20px"
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto"
  },
  badge: {
    display: "inline-block",
    padding: "10px 16px",
    borderRadius: "999px",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.12)",
    fontSize: "12px",
    letterSpacing: "0.18em",
    textTransform: "uppercase"
  },
  hero: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "28px",
    alignItems: "center",
    paddingTop: "20px",
    paddingBottom: "30px"
  },
  title: {
    fontSize: "clamp(2.2rem, 6vw, 4.8rem)",
    lineHeight: 1.05,
    fontWeight: 900,
    margin: "12px 0"
  },
  subtitle: {
    color: "rgba(255,255,255,0.8)",
    fontSize: "1.05rem",
    lineHeight: 1.8
  },
  ctaRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
    marginTop: "20px"
  },
  primaryBtn: {
    background: "#ff8cb2",
    color: "#14000b",
    padding: "14px 18px",
    borderRadius: "16px",
    border: "none",
    fontWeight: 700,
    cursor: "pointer"
  },
  secondaryBtn: {
    background: "rgba(255,255,255,0.06)",
    color: "white",
    padding: "14px 18px",
    borderRadius: "16px",
    border: "1px solid rgba(255,255,255,0.12)",
    cursor: "pointer"
  },
  card: {
    background: "rgba(255,255,255,0.07)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "28px",
    overflow: "hidden",
    backdropFilter: "blur(12px)"
  },
  heroImage: {
    width: "100%",
    height: "420px",
    objectFit: "cover"
  },
  section: {
    padding: "28px 0"
  },
  sectionLabel: {
    fontSize: "12px",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "rgba(255,210,220,0.7)"
  },
  sectionTitle: {
    fontSize: "clamp(1.8rem, 4vw, 3rem)",
    fontWeight: 900,
    margin: "10px 0 10px"
  },
  sectionText: {
    color: "rgba(255,255,255,0.72)",
    lineHeight: 1.8
  },
  gallery: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "16px"
  },
  photo: {
    width: "100%",
    height: "280px",
    objectFit: "cover"
  },
  photoCaption: {
    padding: "14px",
    color: "rgba(255,255,255,0.85)",
    fontSize: "0.95rem"
  },
  letterBox: {
    padding: "24px"
  },
  paragraph: {
    color: "rgba(255,255,255,0.82)",
    lineHeight: 1.9,
    marginBottom: "14px"
  },
  timelineItem: {
    display: "flex",
    gap: "16px",
    alignItems: "flex-start",
    padding: "18px",
    marginBottom: "14px"
  },
  timelineNumber: {
    minWidth: "42px",
    height: "42px",
    borderRadius: "14px",
    background: "#ffb1c9",
    color: "#14000b",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 800
  },
  finalBox: {
    padding: "30px",
    textAlign: "center",
    background: "linear-gradient(135deg, rgba(255,168,197,0.15), rgba(255,255,255,0.05))"
  },
  footer: {
    textAlign: "center",
    color: "rgba(255,255,255,0.55)",
    padding: "22px 0 10px"
  }
}

export default function App() {
  const showSecret = () => {
    alert("I love you more than this website can ever explain. 💖")
  }

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", flexWrap: "wrap" }}>
          <div style={styles.badge}>Birthday Surprise</div>
          <button
            style={styles.secondaryBtn}
            onClick={() => {
              const el = document.getElementById("final-note")
              if (el) el.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Final Surprise
          </button>
        </div>

        <section style={styles.hero}>
          <div>
            <p style={{ color: "rgba(255,210,220,0.85)" }}>For the most beautiful girl in my life 💖</p>
            <h1 style={styles.title}>
              Happy Birthday, <span style={{ color: "#ff9dbd" }}>My Love</span>
            </h1>
            <p style={styles.subtitle}>
              This little website is not enough to express what you mean to me, but it still carries a piece of my heart.
              Today is yours — your smile, your warmth, your magic, your softness, your chaos, all of it.
            </p>

            <div style={styles.ctaRow}>
              <a href="#memories">
                <button style={styles.primaryBtn}>Open Our Memories</button>
              </a>
              <a href="#message">
                <button style={styles.secondaryBtn}>Read My Letter</button>
              </a>
            </div>
          </div>

          <div style={styles.card}>
            <img
              style={styles.heroImage}
              src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80"
              alt="Romantic portrait"
            />
          </div>
        </section>

        <section id="memories" style={styles.section}>
          <div style={styles.sectionLabel}>Memory Gallery</div>
          <h2 style={styles.sectionTitle}>Little pieces of us</h2>
          <p style={styles.sectionText}>
            Replace these demo images with your real photos. Otherwise this stays pretty but fake.
          </p>

          <div style={{ height: "16px" }} />

          <div style={styles.gallery}>
            {photos.map((photo, index) => (
              <div key={index} style={styles.card}>
                <img src={photo.src} alt={photo.caption} style={styles.photo} />
                <div style={styles.photoCaption}>{photo.caption}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="message" style={styles.section}>
          <div style={{ ...styles.card, ...styles.letterBox }}>
            <div style={styles.sectionLabel}>A Letter For You</div>
            <h2 style={styles.sectionTitle}>More than words can hold</h2>

            <p style={styles.paragraph}>
              You came into my life and changed the atmosphere of it. Things that once felt ordinary started feeling lighter, warmer, and more alive.
            </p>
            <p style={styles.paragraph}>
              I love the way you exist — the way you smile, the way you react, the way you care even when you pretend not to, the way your presence stays with me long after a conversation ends.
            </p>
            <p style={styles.paragraph}>
              On your birthday, I do not just want to celebrate the day you were born. I want to celebrate the peace you bring, the strength you carry, and the softness that makes you beautifully you.
            </p>
            <p style={styles.paragraph}>
              I hope this year protects your heart, rewards your efforts, and gives you reasons to smile without forcing anything.
            </p>
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionLabel}>Our Story</div>
          <h2 style={styles.sectionTitle}>A timeline worth keeping</h2>

          <div style={{ marginTop: "16px" }}>
            {timeline.map((item, index) => (
              <div key={index} style={{ ...styles.card, ...styles.timelineItem }}>
                <div style={styles.timelineNumber}>{index + 1}</div>
                <div>
                  <h3 style={{ margin: "0 0 6px", fontSize: "1.15rem" }}>{item.title}</h3>
                  <p style={{ margin: 0, color: "rgba(255,255,255,0.72)", lineHeight: 1.8 }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="final-note" style={styles.section}>
          <div style={{ ...styles.card, ...styles.finalBox }}>
            <div style={styles.sectionLabel}>Final Surprise</div>
            <h2 style={styles.sectionTitle}>One last thing...</h2>
            <p style={{ ...styles.sectionText, maxWidth: "700px", margin: "0 auto" }}>
              No matter how many beautiful people exist in this world, there is only one you.
              And that is exactly why today feels special to me. Happy Birthday, baby. 💗
            </p>

            <div style={{ height: "20px" }} />
            <button style={styles.primaryBtn} onClick={showSecret}>
              Tap for Secret Message
            </button>
          </div>
        </section>

        <footer style={styles.footer}>Made with love by Ankit ✨</footer>
      </div>
    </div>
  )
}
