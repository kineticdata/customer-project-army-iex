import React, { useMemo } from "react";
import '../assets/styles/homepage.css'


export const Homepage = () => {
    
    const articles = useMemo(() => ([
        {
            title: 'Brigadier General Cushing takes command of DEVCOM',
            date: 'September 11, 2023',
            link: 'https://iex.army.mil/wp-content/uploads/2023/09/09072023-DEVCOM-COC-23.jpg'
        },
        {
            title: 'Command Sgt. Maj. Brian D. Haydt assumes responsibility as DEVCOM Command Sergeant Major',
            date: 'July 20, 2023',
            link: 'https://iex.army.mil/wp-content/uploads/2023/07/size0-full-1.jpg'
        },
        {
            title: 'DEVCOM physicist sparks interest in STEM with children in her community',
            date: 'August 15, 2023',
            link: 'https://iex.army.mil/wp-content/uploads/2023/08/Image002_1024x768.jpg'
        }
    ]), [])

    return (
        <div className="homepage-wrapper">
            <div className="opaque-overlay">
                <div className="hp-intro">
                    <div className="big-yellow">Innovating Tomorrow’s</div>
                    <div className="big-yellow">Defense</div>
                    <div className="blow-up-font-size">Through Hands-On</div>
                    <div className="blow-up-font-size">Experimentation</div>
                    <div className="big-yellow">Today.</div>
                </div>
            </div>
            <div className="who-we-are">
                <div className="section-title">
                    WHO WE ARE
                </div>
                <div className="separator" />
                <div className="section-content">
                    ASA(ALT) invites innovators to bridge the gaps and help shape the future of our early-stage reference architectures. Acknowledging the intrinsic nature of our evolving frameworks – they are architectures, not products – our Innovation Exchange serves as a hub for collaboration, experimentation, and excellence. Together, we fill identified gaps, propelling us toward a future where innovation shapes the Army’s architecture. Join us in shaping tomorrow’s Army through the power of experimentation. 
                </div>
                <button className="who-button">Learn More</button>
            </div>
            <div className="top-news-wrapper">
                <div className="top-news">
                    <div className="section-title">
                        TOP NEWS
                    </div>
                    <div className="separator" />
                    <div className="carousel">
                        <div className="carrot-wrapper">
                            <svg width="20" height="20" viewBox="0 0 256 512" className="pointer">
                                <path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" />
                            </svg>
                        </div>
                        {articles.map(article => (
                            <div className="carousel-item">
                                <img src={article.link} className="image" />
                                <div className="info-wrapper">
                                    <div className="info-title">
                                        {article.title}
                                    </div>
                                    <div className="info-date">
                                        {article.date}
                                    </div>
                                    <button className="article-button">Read More</button>
                                </div>
                            </div>
                        ))}
                        <div className="carrot-wrapper">
                            <svg width="20" height="20" viewBox="0 0 256 512" className="pointer">
                                <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}