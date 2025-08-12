import React from 'react'
import { Helmet } from 'react-helmet'

function HelmetComponent({ title, canonical }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="keywords" content="ICSCENT, International Conference on Science, Engineering and Technology  ,ICSET, science conference, engineering conference, technology conference, research conference, academic conference, innovation, scientific research, engineering research, technology advancements, paper submission, call for papers, conference 2025" />
      <meta name="description" content="Join the International Conference on Science, Engineering and Technology 2025 to explore groundbreaking research, innovative ideas, and global collaborations in science, engineering, and technology fields." />
      <meta name="author" content="ICSCENT Editorial Team" />
      <meta name="robots" content="index, follow" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="International Conference on Science, Engineering and Technology" />
      <meta property="og:description" content="Join the International Conference on Science, Engineering and Technology 2025 to explore groundbreaking research, innovative ideas, and global collaborations in science, engineering, and technology fields." />
      <meta property="og:url" content="https://icscent.com/" />
      <meta property="og:image" content="https://icscent.com/images/ICSCENT lOGO.png" />

      <link rel="canonical" href={canonical} />
      <link rel="icon" type="image/png" href="https://icscent.com/images/ICSCENT fav.png" />

    </Helmet>
  )
}

export default HelmetComponent