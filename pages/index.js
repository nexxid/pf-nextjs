import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Head>
        <title>meyoo | Spotify Music</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        <link rel="stylesheet" href="https://nyimpen.vercel.app/component/spotfy.css" />
      </Head>
      <div className="container">
        <header>
          <img src="https://pomf2.lain.la/f/910ut1o2.jpg" alt="Profile Picture" className="profile-pic" />
          <h1 className="nama">Neyoo</h1>
          <p className="lokasi">
            <i className="fas fa-globe-asia"></i> Jawa Barat, Karawang
          </p>
          <p className="bio">”Self.”</p>
        </header>

        <section className="spotify-section">
          <h2>My go-to playlist is always there for me</h2>
          <div className="iframe-container">
            {loading && (
              <div className="loading">
                <i className="fas fa-spinner"></i>
              </div>
            )}
            <iframe
              src="https://open.spotify.com/embed/playlist/0C3w3C4C9JMVpjJdeDN09m"
              frameBorder="0"
              allowTransparency="true"
              allow="encrypted-media"
              style={{ display: loading ? 'none' : 'block' }}
            ></iframe>
          </div>
        </section>

        <div className="social-icons">
          <a href="https://github.com/nexxid" target="_blank" className="social-link" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
                  </div>
      </div>
    </>
  )
}
