// pages/services.js
import Head from "next/head";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Prophetic Consultation",
      icon: "/assets/icons/prophecy.png",
      description:
        "Receive personal prophetic insight and spiritual guidance directly aligned with your life’s path and divine assignment.",
      color: "linear-gradient(135deg, #ff3b3b, #b71c1c)",
      link: "#",
    },
    {
      title: "Life & Spiritual Coaching",
      icon: "/assets/icons/coaching.png",
      description:
        "Develop spiritual and emotional clarity through one-on-one mentorship designed to help you overcome life’s challenges.",
      color: "linear-gradient(135deg, #4FC3F7, #0288D1)",
      link: "#",
    },
    {
      title: "Business Coaching",
      icon: "/assets/icons/business.png",
      description:
        "Transform your business mindset with faith-driven strategies and personalized consulting from Dr. Larry Reid.",
      color: "linear-gradient(135deg, #ff8a00, #ff3b3b)",
      link: "#",
    },
    {
      title: "Prayer & Intercession",
      icon: "/assets/icons/prayer.png",
      description:
        "Submit prayer requests or join corporate intercessory sessions where faith and agreement bring supernatural results.",
      color: "linear-gradient(135deg, #9c27b0, #e040fb)",
      link: "#",
    },
    {
      title: "Public Speaking & Media Booking",
      icon: "/assets/icons/microphone.png",
      description:
        "Invite Dr. Reid for media appearances, conferences, or podcasts focused on faith, culture, and leadership.",
      color: "linear-gradient(135deg, #43a047, #1b5e20)",
      link: "#",
    },
  ];

  return (
    <>
      <Head>
        <title>Services — Dr. Larry Reid Live</title>
      </Head>

      <section className="services-page">
        {/* HERO HEADER */}
        <div className="services-hero">
          <h1>Explore Services</h1>
          <p>
            Discover prophetic consultations, coaching, and mentorship designed to elevate your spiritual, personal, and professional life.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="services-grid container">
          {services.map((s, i) => (
            <div key={i} className="service-card" style={{ background: s.color }}>
              <img src={s.icon} alt={s.title} />
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <Link href={s.link} className="btn service-btn">
                Learn More
              </Link>
            </div>
          ))}
        </div>

        {/* FEATURED SECTION */}
        <div className="featured container">
          <h2>✨ Featured Service: Prophetic Consultation</h2>
          <p>
            Experience clarity, confirmation, and divine direction through a one-on-one prophetic consultation with Dr. Reid.
          </p>
          <Link href="#" className="btn primary">
            Book a Session
          </Link>
        </div>

        {/* CTA SECTION */}
        <div className="services-cta">
          <h2>Ready to Take the Next Step?</h2>
          <p>
            Whether you’re seeking guidance, mentorship, or business strategy — Dr. Larry Reid’s services are designed to transform your life.
          </p>
          <Link href="/membership" className="btn primary">
            Join the Movement
          </Link>
        </div>
      </section>
    </>
  );
}
