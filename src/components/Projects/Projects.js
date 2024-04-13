import React from 'react';
import "./Projects.css"
import data from "../../utils/index.json"
export const Projects = () => {
    return (
        <section className="portfolio--section" id="MyPortfolio">
            <div className="portfolio--container-box">
                <div className="portfolio--container">
                    <h2 className="section--heading" style={{justifyContent:"center"}}>Portfolio</h2>
                </div>
            </div>
            <div className="portfolio--section--container">
                {data?.portfolio?.map((item, index) => (
                    <div key={index} className="portfolio--section--card">
                        <div className="portfolio--section--img">
                            <img src={item.src} alt="Placeholder" />
                        </div>
                        <div className="portfolio--section--card--content">
                            <div>
                                <h3 className="portfolio--section--title">{item.title}</h3>
                                <p style={{color:"black"}} className="text-md">{item.description}</p>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}