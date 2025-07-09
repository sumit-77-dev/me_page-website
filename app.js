const { useState, useEffect, useRef } = React;

const Draggable = ReactDraggable.default;

const WaveBackground = () => {
  return React.createElement(
    'div',
    {
      style: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '50vh',
        overflow: 'hidden',
        zIndex: -1,
      },
    },
    React.createElement(
      'svg',
      {
        style: {
          width: '200%',
          height: '130%',
          animation: 'waveMove 6s ease-in-out infinite alternate',
        },
        viewBox: '0 0 1440 320',
        preserveAspectRatio: 'none',
      },
      React.createElement('path', {
        fill: '#00aaff',
        fillOpacity: '0.6',
        d:
          'M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,170.7C672,149,768,139,864,144C960,149,1056,171,1152,176C1248,181,1344,171,1392,165.3L1440,160L1440,320L0,320Z',
      })
    )
  );
};

const WaveBackground2 = () => {
  return React.createElement(
    'div',
    {
      style: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '40vh',
        overflow: 'hidden',
        zIndex: -2,
      },
    },
    React.createElement(
      'svg',
      {
        style: {
          width: '200%',
          height: '125%',
          animation: 'waveMove2 4s ease-in-out infinite alternate',
        },
        viewBox: '0 0 1440 320',
        preserveAspectRatio: 'none',
      },
      React.createElement('path', {
        fill: '#95d5e6',
        fillOpacity: '0.6',
        d:
          'M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,170.7C672,149,768,139,864,144C960,149,1056,171,1152,176C1248,181,1344,171,1392,165.3L1440,160L1440,320L0,320Z',
      })
    )
  );
};


function App() {
    const nodeRef = useRef(null);

    const [showBoxabout, setShowBoxabout] = useState(false);
    const [showBoxlinks, setShowBoxlinks] = useState(false);
    const [showBoxworks, setShowBoxworks] = useState(false);
    const [showBoxfaq, setShowBoxfaq] = useState(false);
    const [showBoxcontacts, setShowBoxcontacts] = useState(false);
    


    function playClickSoundtheme() {
        const audio2 = document.getElementById("theme-sound");
        audio2.preload = 'auto';
        if (audio2) {
            audio2.currentTime = 0; // rewind to start
            audio2.volume = 0.5;     // optional volume control
            audio2.play().catch(e => console.warn("Sound failed:", e));
        }
    }

    useEffect(() => {
        document.querySelector('.about-react')?.addEventListener('click', () => setShowBoxabout(true));
        document.querySelector('.links-react')?.addEventListener('click', () => setShowBoxlinks(true));
        document.querySelector('.works-react')?.addEventListener('click', () => setShowBoxworks(true));
        document.querySelector('.faq-react')?.addEventListener('click', () => setShowBoxfaq(true));
        document.querySelector('.contacts-react')?.addEventListener('click', () => setShowBoxcontacts(true));

        document.querySelector('.header-1')?.addEventListener('click', () => {
            requestIdleCallback(playClickSoundtheme);
        });
    }, []);


    document.querySelectorAll('.fullscreen-img').forEach(img => {
        img.addEventListener('click', () => {
                if (img.requestFullscreen) {
                    img.requestFullscreen();
                } else if (img.webkitRequestFullscreen) {
                    img.webkitRequestFullscreen();
                } else if (img.msRequestFullscreen) {
                    img.msRequestFullscreen();
                }
            });
        });





    const [zcounter, setzcounter] = useState(1);

    const increasezcounter = () => {
        setzcounter(zcounter + 1);
    }
    
    let topboxclass = 'draggable-box-top';
    let mainboxclass = 'draggable-box-main';
    let aboutbox = 'draggable-box-about';
    let namecolor = '#C0FAFF';
    let textcolor = '#FFFFFF';
    let educationborder = 'about-education';
    let linkboxclass = 'draggable-box-links';
    let linkboxtext = 'link_text';
    let workboxclass = 'draggable-box-works';
    let worktoolscolor = '#171717';
    let worktoolborder = '2px, solid, white';
    let worklink = 'see-more';
    let seelinkcolor = 'see-link see-link-hover';
    let faqboxclass = 'draggable-box-faq';
    let faqlist = 'faq-list';
    let faqcontent = 'faq-list-content';
    let contactboxclass = 'draggable-box-contacts'; 

    if(light){
        topboxclass = 'draggable-box-top-light';
        mainboxclass = "draggable-box-main-light"
        aboutbox = 'draggable-box-about-light';
        namecolor = '#F59300';
        textcolor = '#424242';
        educationborder = 'about-education-light';
        linkboxclass = 'draggable-box-links-light';
        linkboxtext = 'link_text-light';
        workboxclass = 'draggable-box-works-light';
        worktoolscolor = '#FFFFFF';
        worktoolborder = '2px, solid, #EBEBEB';
        worklink = 'see-more-light';
        seelinkcolor = 'see-link-light see-link-hover-light';
        faqboxclass = 'draggable-box-faq-light';
        faqlist = 'faq-list-light';
        faqcontent = 'faq-list-content-light';
        contactboxclass = 'draggable-box-contacts-light';
    }
    else{
        topboxclass = 'draggable-box-top';
        mainboxclass = 'draggable-box-main';
        aboutbox = 'draggable-box-about';
        namecolor = '#C0FAFF';
        textcolor = '#FFFFFF';
        educationborder = 'about-education';
        linkboxclass = 'draggable-box-links';
        linkboxtext = 'link_text';
        workboxclass = 'draggable-box-works';
        worktoolscolor = '#171717';
        worktoolborder = '2px, solid, white';
        worklink = 'see-more';
        seelinkcolor = 'see-link see-link-hover';
        faqboxclass = 'draggable-box-faq';
        faqlist = 'faq-list';
        faqcontent = 'faq-list-content';
        contactboxclass = 'draggable-box-contacts';
    }

    return <>
        
        {showBoxabout && (
        <Draggable nodeRef={nodeRef}>
            <div ref={nodeRef} className={aboutbox} id='1' onClick={() => {
                increasezcounter();
                document.querySelector('.' + aboutbox).style.zIndex = zcounter;
            }}>
                <div className = {topboxclass} id="topbox">
                    <div style={{marginLeft: 20}}>
                        about
                    </div>
                    <button className="close-btn" onClick={() => setShowBoxabout(false)} style={{fontSize: 20}}>
                        [ × ]
                    </button>
                </div>
                <div className={mainboxclass}>
                    <div style={{display: 'flex', padding: 32, alignItems: 'center', height: '36%'}}>
                        <img src="profile-image-1.jpg" style={{width: 160, height: 160, borderRadius: 500}}></img>
                        <div style={{padding: 25, marginTop: 12}}>
                            <div style={{fontSize: 48, fontFamily: 'sans-serif', fontWeight: 500, color: namecolor }}>Sumit kumar gola
                                <span style={{fontSize: 24, fontWeight: 500}}> スミット</span>
                            </div>
                            <div style={{color: textcolor, fontFamily: 'monospace', fontSize: 18, height: 56, fontWeight: 400, paddingLeft: 6}}>
                                Persuring B.tech(IN 2nd year)<br />
                                <div style={{marginTop: 4}}>Video editor and artist</div>
                            </div>
                        </div>

                    </div>
                    <hr style={{ height: '1px',  backgroundColor: 'gray', border: 'none' }} />
                    <div style={{overflowY: 'scroll',paddingLeft: '48px',paddingRight: '48px', paddingTop: '20px', height: '13.5rem', display: 'flex', flexDirection: 'column', gap: '40px'}}>
                        <div>
                            <div style={{color: textcolor,  fontFamily: 'sans-serif',fontSize: '20px', paddingBottom: '20px'}}>hi! i'm sumit, an sketch artist and web developer.  i..</div>
                            <ul style={{display: 'flex', flexDirection: 'column', gap: '8px', marginLeft: '15px'}}>
                                <li style={{color: textcolor, fontFamily: 'sans-serif', fontSize: '20px'}}>create <a href="https://www.instagram.com/yeap_icandraw_/" target="_main" style={{color: namecolor}}>on paper sketches</a>,</li>
                                <li style={{color: textcolor, fontFamily: 'sans-serif', fontSize: '20px'}}>edit <a href="https://www.instagram.com/yeap_icandraw_/" target="_main" style={{color: namecolor}}>videos</a> related to anime and life style,</li>
                                <li style={{color: textcolor, fontFamily: 'sans-serif', fontSize: '20px'}}>create website, and</li>
                                <li style={{color: textcolor, fontFamily: 'sans-serif', fontSize: '20px'}}>do frontend web development!</li>
                            </ul>
                        </div>
                        <div>
                            <div style={{color: textcolor, fontWeight: 'bolder', fontFamily: 'Roboto Mono', fontSize: '30px'}}>EDUCATION</div>
                            <div style={{height: '64px', fontFamily: 'sans-serif', marginTop: '8px', paddingLeft: '20px', alignContent: 'center', display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'center'}} className={educationborder}>
                                <div style={{color: textcolor, fontSize: '20px'}}>Bachelor of Technology</div>
                                <div style={{color: 'gray', fontSize: '14px'}}>(GRAGUATING IN 2028)</div>
                            </div>
                        </div>
                        <div>
                            <div style={{color: textcolor,  fontSize: '30px', fontFamily: 'Roboto MOno', fontWeight: 'bolder'}}>OTHER INTREST</div>
                            <ul style={{display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px', paddingLeft: '20px'}}>
                                <li style={{color: textcolor, fontFamily: 'monospace', fontSize: '20px',}}>gaming</li>
                                <li style={{color: textcolor, fontFamily: 'monospace', fontSize: '20px'}}>reading manga</li>
                                <li style={{color: textcolor, fontFamily: 'monospace', fontSize: '20px'}}>listening music</li>
                                <li style={{color: textcolor, fontFamily: 'monospace', fontSize: '20px'}}>web surffing</li>
                                <li style={{color: textcolor, fontFamily: 'monospace', fontSize: '20px'}}>craking jokes</li>
                                <li style={{color: textcolor, fontFamily: 'monospace', fontSize: '20px'}}>playing chess</li>
                            </ul>
                        </div>
                        <div>
                            <div style={{color: textcolor,  fontSize: '30px', fontFamily: 'Roboto MOno', fontWeight: 'bolder'}}>LANGUAGE PROFICIENCY</div>
                            <div className={educationborder} style={{height: '60px', marginTop: '10px', color: textcolor, fontFamily: 'sans-serif', fontSize: '20px', paddingLeft: '20px'}}>
                                i have native fluency in <span style={{color: namecolor}}>Hindi/हिन्दी</span> and <span style={{color: namecolor}}>English</span>, and can speak in conventional <span style={{color: namecolor}}>Japanese/日本語</span>
                            </div>
                        </div>
                        <div></div>
                    </div>
                    
                </div>
            </div>
        </Draggable>
        )}

        {showBoxlinks && (
        <Draggable  nodeRef={nodeRef}>
            <div ref={nodeRef} className={linkboxclass} id='2' onClick={() => {
                increasezcounter();
                document.querySelector('.' + linkboxclass).style.zIndex = zcounter;
            }}>
                <div className={topboxclass}>
                    <div style={{marginLeft: 20}}>
                        links
                    </div>
                    <button className="close-btn" onClick={() => setShowBoxlinks(false)} style={{fontSize: 20}}>
                       [ × ]
                    </button>
                </div>
                <div className={mainboxclass}>
                    <div style={{width: '100%', height: '44vh', display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <img src="icon_twitter_dark.webp" style={{height: '80px', width: '80px'}}></img>
                            <div className={linkboxtext}>twitter</div>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <a href="https://www.youtube.com/" target="_main"><img src="icon_yt_dark.webp" style={{height: '80px', width: '80px'}}></img></a>
                            <div className={linkboxtext}>youtube</div>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <a href="https://www.instagram.com/yeap_icandraw_/" target="_main"><img src="icon_ig_dark.webp" style={{height: '80px', width: '80px'}}></img></a>
                            <div className={linkboxtext}>intagram</div>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <img src="icon_discord_dark.webp" style={{height: '80px', width: '80px'}}></img>
                            <div className={linkboxtext}>discord</div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </Draggable>
        )}

        {showBoxworks && (
        <Draggable nodeRef={nodeRef}>
            <div ref={nodeRef} className={workboxclass} id='3' onClick={() => {
                increasezcounter();
                document.querySelector('.' + workboxclass).style.zIndex = zcounter;
            }}>
                <div className={topboxclass}>
                    <div style={{marginLeft: 20}}>
                        works
                    </div>
                    <button className="close-btn" onClick={() => setShowBoxworks(false)} style={{fontSize: 20}}>
                       [ × ]
                    </button>
                </div>
                <div className={mainboxclass}>
                    <div style={{overflowY: 'scroll',paddingLeft: '48px',paddingRight: '48px', paddingTop: '20px', height: '95%', display: 'flex', flexDirection: 'column', gap: '40px'}}>
                        <div style={{display: 'flex'}}>
                            <div style={{width: '50%'}}>
                                <div style={{color: textcolor, fontFamily: 'monospace', fontSize: '28px', fontWeight: 300, marginBottom: '6px', letterSpacing: '2px'}}>TOOLS</div>
                                <div style={{display: 'flex', flexWrap: 'wrap', fontFamily: 'sans-serif', gap: '10px'}}>
                                    <span className="work-info" style={{backgroundColor: worktoolscolor, color: textcolor, padding: '5px', border: worktoolborder, borderRadius: '5px'}}>Adobe Premiere</span>
                                    <span className="work-info" style={{backgroundColor: worktoolscolor, color: textcolor, padding: '5px', border: worktoolborder, borderRadius: '5px'}}>Figma</span>
                                    <span className="work-info" style={{backgroundColor: worktoolscolor, color: textcolor, padding: '5px', border: worktoolborder, borderRadius: '5px'}}>Adobe After Effects</span>
                                    <span className="work-info" style={{backgroundColor: worktoolscolor, color: textcolor, padding: '5px', border: worktoolborder, borderRadius: '5px'}}>Adobe Photoshop</span>
                                    <span className="work-info" style={{backgroundColor: worktoolscolor, color: textcolor, padding: '5px', border: worktoolborder, borderRadius: '5px'}}>Indesign</span>
                                    <span className="work-info" style={{backgroundColor: worktoolscolor, color: textcolor, padding: '5px', border: worktoolborder, borderRadius: '5px'}}>Clip Studio Paint</span>
                                </div>
                            </div>
                            <div style={{width: '50%'}}>
                                <div style={{color: textcolor, fontFamily: 'monospace', fontSize: '28px', fontWeight: 300, marginBottom: '6px', letterSpacing: '2px'}}>DEVELOPMENT</div>
                                <div style={{display: 'flex', flexWrap: 'wrap',  fontFamily: 'sans-serif', gap: '10px'}}>
                                    <span className="work-info" style={{backgroundColor: worktoolscolor, color: textcolor, padding: '5px', border: worktoolborder, borderRadius: '5px'}}>C</span>
                                    <span className="work-info" style={{backgroundColor: worktoolscolor, color: textcolor, padding: '5px', border: worktoolborder, borderRadius: '5px'}}>C++</span>
                                    <span className="work-info" style={{backgroundColor: worktoolscolor, color: textcolor, padding: '5px', border: worktoolborder, borderRadius: '5px'}}>JavaScript</span>
                                    <span className="work-info" style={{backgroundColor: worktoolscolor, color: textcolor, padding: '5px', border: worktoolborder, borderRadius: '5px'}}>Python</span>
                                    <span className="work-info" style={{backgroundColor: worktoolscolor, color: textcolor, padding: '5px', border: worktoolborder, borderRadius: '5px'}}>HTML/CSS</span>
                                    <span className="work-info" style={{backgroundColor: worktoolscolor, color: textcolor, padding: '5px', border: worktoolborder, borderRadius: '5px'}}>react</span>
                                </div>
                            </div>
                        </div>
                        <div><hr style={{ height: '1px',  backgroundColor: 'gray', border: 'none' }} /></div>
                        <div>
                            
                            <div style={{color: textcolor, fontFamily: 'monospace', fontSize: '28px', fontWeight: 'bolder', marginBottom: '6px'}}>EDITED VIDEOS</div>
                            <div style={{display: 'grid', justifyContent: "space-evenly", width: "100%", gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px'}}>
                                <video src="erwin(final edit).webm" className="work-video" controls></video>
                                <video src="one piece_1.webm" className="work-video" controls></video>
                                <video src="Attack On Titans_1.webm" className="work-video" controls></video>
                                <video src="kamra no. 509 - Made with Clipchamp.webm" className="work-video" controls></video>
                            </div>
                        </div>
                        <div><hr style={{ height: '1px',  backgroundColor: 'gray', border: 'none' }} /></div>
                        <div>
                            <div style={{color: textcolor, fontFamily: 'monospace', fontSize: '28px', fontWeight: 'bolder', marginBottom: '6px'}}>SKETCHES</div>
                            <div style={{display: 'grid', width: "102%", height: '98%%', gridTemplateColumns: 'repeat(3, 1fr)', placeItems: 'center', gap: '5px'}}>
                                <img src="work-image-1.webp" loading="lazy" className="work-image work-image-zoom fullscreen-img" alt="Click to enlarge"></img>
                                <img src="work-image-2.webp" loading="lazy" className="work-image work-image-zoom fullscreen-img" alt="Click to enlarge"></img>
                                <img src="work-image-3.webp" loading="lazy" className="work-image work-image-zoom fullscreen-img" alt="Click to enlarge"></img>
                                <img src="work-image-4.webp" loading="lazy" className="work-image work-image-zoom fullscreen-img" alt="Click to enlarge"></img>
                                <img src="work-image-5.webp" loading="lazy" className="work-image work-image-zoom fullscreen-img" alt="Click to enlarge"></img>
                                <img src="work-image-6.webp" loading="lazy" className="work-image work-image-zoom fullscreen-img" alt="Click to enlarge"></img>
                                <img src="work-image-7.webp" loading="lazy" className="work-image work-image-zoom fullscreen-img" alt="Click to enlarge"></img>
                                <img src="work-image-8.webp" loading="lazy" className="work-image work-image-zoom fullscreen-img" alt="Click to enlarge"></img>
                                <img src="work-image-9.webp" loading="lazy" className="work-image work-image-zoom fullscreen-img" alt="Click to enlarge"></img>
                            </div>
                            <div className={worklink}>See more on <a href="https://www.instagram.com/yeap_icandraw_/" target="_main" className={seelinkcolor}>Instagram</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </Draggable>
        )}        

        {showBoxfaq && (
        <Draggable nodeRef={nodeRef}>
            <div ref={nodeRef} className={faqboxclass} id='4' onClick={() => {
                increasezcounter();
                document.querySelector('.' + faqboxclass).style.zIndex = zcounter;
            }}>
                <div className={topboxclass}>
                    <div style={{marginLeft: 20}}>
                        frequently ask questions
                    </div>
                    <button className="close-btn" onClick={() => setShowBoxfaq(false)} style={{fontSize: 20}}>
                       [ × ]
                    </button>
                </div>
                <div className={mainboxclass}>
                    <div style={{overflowY: 'scroll',paddingLeft: '20px',paddingRight: '20px', paddingTop: '20px', height: '95%', display: 'flex', flexDirection: 'column', gap: '20px'}}>
                        <details className={faqlist}>
                            <summary className = "faq-list-title">in which year am i?</summary>
                            <div className = {faqcontent}>
                                <ul style={{marginLeft: '14px'}}>
                                    <li>i am currently in <b>2nd year :)</b></li>
                                </ul>
                            </div>
                        </details>
                        <details className={faqlist}>
                            <summary className = "faq-list-title">where did i get the insperation for this website?</summary>
                            <div className = {faqcontent}>
                                <ul style={{marginLeft: '14px'}}>
                                    <li>the frontend design of this website is inspired from <b><a href="https://www.youtube.com/@shar" target="_main" className={seelinkcolor} style={{fontFamily: 'sans-serif'}}>shar(youtuber)</a>🔴</b>.</li>
                                </ul>
                            </div>
                        </details>
                        <details className={faqlist}>
                            <summary className = "faq-list-title">are you an artist, editor or developer?</summary>
                            <div className = {faqcontent}>
                                <ul style={{marginLeft: '14px', display: 'flex', flexDirection: 'column', gap: '5px'}}>
                                    <li>truly speaking i am <b>just a student</b> trying to learn all of this.</li>
                                    <li>and also want to learn more of this.</li>
                                </ul>
                            </div>
                        </details>
                        <details className={faqlist}>
                            <summary className = "faq-list-title">what's your setup?</summary>
                            <div className = {faqcontent}>
                                <ul style={{marginLeft: '14px', display: 'flex', flexDirection: 'column', gap: '5px'}}>
                                    <li>sasta sa laptop,</li>
                                    <li>sasta sa mouse,</li>
                                    <li>sasta se earphone,</li>
                                    <li>and urge to <b>learn</b> 😤.</li>
                                </ul>
                            </div>
                        </details>
                        <details className={faqlist}>
                            <summary className = "faq-list-title">what is your cpi?</summary>
                            <div className = {faqcontent}>
                                <ul style={{marginLeft: '14px', display: 'flex', flexDirection: 'column', gap: '5px'}}>
                                    <li>kuch sawal bina jawab kehi aache lagte hai😅.</li>
                                    <li>kbhi personal milo tho btaouga.</li>
                                </ul>
                            </div>
                        </details>
                        <details className={faqlist}>
                            <summary className = "faq-list-title">which anime is your favourite?</summary>
                            <div className = {faqcontent}>
                                <ul style={{marginLeft: '14px', display: 'flex', flexDirection: 'column', gap: '5px'}}>
                                    <li><b>attack on titan</b> is my favourite anime 💗 but,</li>
                                    <li>i also like <b>one piece</b>,</li>
                                    <li><b>naruto and death note</b>.</li>
                                </ul>
                            </div>
                        </details>
                        <details className={faqlist}>
                            <summary className = "faq-list-title">kis branch se ho?</summary>
                            <div className = {faqcontent}>
                                <ul style={{marginLeft: '14px', display: 'flex', flexDirection: 'column', gap: '5px'}}>
                                    <li><b>civil branch</b>👷‍♂️.</li>
                                </ul>
                            </div>
                        </details>
                        <details className={faqlist}>
                            <summary className = "faq-list-title">extrovert or introvert?</summary>
                            <div className = {faqcontent}>
                                <ul style={{marginLeft: '14px', display: 'flex', flexDirection: 'column', gap: '5px'}}>
                                    <li><b>introvert</b>🙂.</li>
                                </ul>
                            </div>
                        </details>
                        <div></div>
                    </div>
                </div>
            </div>
        </Draggable>
        )}

        {showBoxcontacts && (
        <Draggable nodeRef={nodeRef}>
            <div ref={nodeRef} className={contactboxclass} id='5' onClick={() => {
                increasezcounter();
                document.querySelector('.' + contactboxclass).style.zIndex = zcounter;
            }}>
                <div className={topboxclass}>
                    <div style={{marginLeft: 20}}>
                        contacts
                    </div>
                    <button className="close-btn" onClick={() => setShowBoxcontacts(false)} style={{fontSize: 20}}>
                       [ × ]
                    </button>
                </div>
                <div className={mainboxclass}>
                    <div style={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <div style={{textAlign: 'center', fontFamily: 'sans-serif'}}>For privacy reasons i'm not provinding any email for contact,<br /> but you can DM me on <a href="https://www.instagram.com/yeap_icandraw_/" target="_main" className={seelinkcolor} style={{cursor: 'pointer'}}>instagram</a></div>
                    </div>
                </div>
            </div>
        </Draggable>
        )}
        <WaveBackground2 />
        <WaveBackground />
    </>
    
}


            


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);