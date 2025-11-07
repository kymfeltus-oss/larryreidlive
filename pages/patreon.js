// pages/patreon.js
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Patreon() {
  // Mock data — replace with real Patreon API later
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const mockPosts = [
      {
        id: "1",
        title: "Behind the Scenes: Upcoming Projects",
        image:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=60",
        content:
          "Dr. Reid shares exclusive insights on his upcoming live sessions and media partnerships. Patreon members get early access!",
        url: "https://www.patreon.com/larryreidlive",
      },
      {
        id: "2",
        title: "Morning Inspiration Recap",
        image:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=60",
        content:
          "Catch the highlights and divine revelations from this morning's broadcast. Members get the full video archive inside Patreon.",
        url: "https://www.patreon.com/larryreidlive",
      },
      {
        id: "3",
        title: "Special Announcement for Mentorship Circle",
        image:
          "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=60",
        content:
          "We’re expanding our mentorship program with new guest instructors and spiritual development workshops. Details inside Patreon.",
        url: "https://www.patreon.com/larryreidlive",
      },
    ];
    setPosts(mockPosts);
  }, []);

  return (
    <>
      <Head>
        <title>Patreon Feed — Dr. Larry Reid Live</title>
      </Head>

      <section className="patreon-page">
        <h1>Patreon Feed</h1>
        <p>Exclusive updates and posts from Dr. Larry Reid’s Patreon community.</p>

        <div className="patreon-grid">
          {posts.map((post) => (
            <div className="patreon-card" key={post.id}>
              <img
                src={post.image}
                alt={post.title}
                className="patreon-img"
              />
              <h3>{post.title}</h3>
              <p className="patreon-content">{post.content}</p>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn primary"
              >
                View on Patreon
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
