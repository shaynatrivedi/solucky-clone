import React from "react";
import Footer from './Footer';
import './Team.css'

const Team = () =>{

    const scrollLeft = (sectionClass) => {
        const container = document.querySelector(`.${sectionClass}`);
        container.scrollBy({ left: -300, behavior: 'smooth' });
    };
      
    const scrollRight = (sectionClass) => {
    const container = document.querySelector(`.${sectionClass}`);
    container.scrollBy({ left: 300, behavior: 'smooth' });
    };

    return(
        <div className="team-page">
            <section class="hero-section">
                    <p class="volunteer-text">
                        Our volunteers dedicate their time & efforts to shaping the brand into 
                        what is today, contributing their unique talents & fresh perspectives.
                        In return they build portfolios, refine their skills, & grow professionally
                        while becoming part of a supportive community that celebreates creativity
                        & collaboration. 
                    </p>
                    <img src="../Assets/Team/shoes.png" class="shoe-image" alt="shoe" />

                    <div class="shoe-caption">
                        <p class="caption-text">step in. stand out.</p>
                        <img src="../Assets/Team/team-arrow.svg" class="arrow-icon" />
                    </div>

                    <h1 class="hero-heading">
                        the <i>solucky</i>experience
                    </h1>

                    <p class="caption-text button-caption">a great team starts with the right fit.</p>

            </section>

            <section className="team-members">
                <div className="main-team-card">
                    <div className="main-team-card-header">
                        <h1 className="team-operations-title">current team members</h1>
                        <p className="team-operations-title-caption">
                        *Click on any team member's photo to visit their Instagram
                        </p>
                    </div>
                    
                    <div className="team-category">
                            <h3 className="team-position-title">Brand Operations</h3>
                            <div className="scroll-buttons">
                                <button className="scroll-left" onClick={() => scrollLeft('brand-operations')}>
                                    <img src="/Assets/Icons/chevron-left.png" alt="arrow-left" style={{ width: '16px', height: '16px' }}></img>
                                </button>
                                <button className="scroll-right" onClick={() => scrollRight('brand-operations')}>
                                    <img src="/Assets/Icons/chevron-right.png" alt="arrow-right" style={{ width: '16px', height: '16px' }}></img>
                                </button>
                            </div>
                            <div className="horizontal-scroll-section brand-operations">

                                <div className="post-div">
                                    <div className="post-header">
                                        <div className="post-left-group">
                                            <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                            <p className="post-account-name">solucky.life</p>
                                        </div>
                                        <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                    </div>
                                    <img className='post-image' src='../Assets/Team/Team-Pictures/SanjanaSolanki.png' alt='founder-image'></img>

                                    <div className="post-bottom-div">
                                        <div className="post-icons">
                                            <div className="post-icons-left-group">
                                                <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                                <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                                <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                            </div>
                                            <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                        </div>
                                
                                        <div className="post-text">
                                            <p>
                                            <span className="post-account-name">
                                                solucky.life </span> 
                                                MEET SANJANA SOLANKI (she/her) 🦚 
                                                <span className="specific-position">The Founder</span> 
                                            </p>
                                        </div>
                                        
                                    </div>
                                </div>

                                <div className="post-div">
                                    <div className="post-header">
                                        <div className="post-left-group">
                                            <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                            <p className="post-account-name">solucky.life</p>
                                        </div>
                                        <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                    </div>
                                    <img className='post-image' src='../Assets/Team/Team-Pictures/ShayariSaha.png' alt='founder-image'></img>

                                    <div className="post-bottom-div">
                                        <div className="post-icons">
                                            <div className="post-icons-left-group">
                                                <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                                <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                                <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                            </div>
                                            <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                        </div>
                                
                                        <div className="post-text">
                                            <p>
                                            <span className="post-account-name">
                                                solucky.life </span> 
                                                MEET SHAYARI SAHA (she/her) 🐳 
                                                <span className="specific-position">Producer</span> 
                                            </p>
                                        </div>
                                        
                                    </div>
                                </div>

                                <div className="post-div">
                                    <div className="post-header">
                                        <div className="post-left-group">
                                            <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                            <p className="post-account-name">solucky.life</p>
                                        </div>
                                        <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                    </div>
                                    <img className='post-image' src='../Assets/Team/Team-Pictures/ShaynaTrivedi.png' alt='founder-image'></img>

                                    <div className="post-bottom-div">
                                        <div className="post-icons">
                                            <div className="post-icons-left-group">
                                                <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                                <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                                <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                            </div>
                                            <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                        </div>
                                
                                        <div className="post-text">
                                            <p>
                                            <span className="post-account-name">
                                                solucky.life </span> 
                                                MEET SHAYNA TRIVEDI (she/her) ✨ 
                                                <span className="specific-position">Website Designer</span> 
                                            </p>
                                        </div>
                                        
                                    </div>
                                </div>

                                <div className="post-div">
                                    <div className="post-header">
                                        <div className="post-left-group">
                                            <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                            <p className="post-account-name">solucky.life</p>
                                        </div>
                                        <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                    </div>
                                    <img className='post-image' src='../Assets/Team/Team-Pictures/AnujaPandit.png' alt='founder-image'></img>

                                    <div className="post-bottom-div">
                                        <div className="post-icons">
                                            <div className="post-icons-left-group">
                                                <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                                <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                                <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                            </div>
                                            <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                        </div>
                                
                                        <div className="post-text">
                                            <p>
                                            <span className="post-account-name">
                                                solucky.life </span> 
                                                MEET ANJUA PANDIT (she/her) 🤍
                                                <span className="specific-position">Assistant Creative Director</span> 
                                            </p>
                                        </div>
                                        
                                    </div>
                                </div>

                                <div className="post-div">
                                    <div className="post-header">
                                        <div className="post-left-group">
                                            <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                            <p className="post-account-name">solucky.life</p>
                                        </div>
                                        <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                    </div>
                                    <img className='post-image' src='../Assets/Team/Team-Pictures/AlinaJafri.png' alt='founder-image'></img>

                                    <div className="post-bottom-div">
                                        <div className="post-icons">
                                            <div className="post-icons-left-group">
                                                <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                                <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                                <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                            </div>
                                            <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                        </div>
                                
                                        <div className="post-text">
                                            <p>
                                            <span className="post-account-name">
                                                solucky.life </span> 
                                                MEET ALINA JAFRI (she/her) 🌺
                                                <span className="specific-position">Assistant Creative Director</span> 
                                            </p>
                                        </div>
                                        
                                    </div>
                                </div>

                                <div className="post-div">
                                    <div className="post-header">
                                        <div className="post-left-group">
                                            <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                            <p className="post-account-name">solucky.life</p>
                                        </div>
                                        <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                    </div>
                                    <img className='post-image' src='../Assets/Team/Team-Pictures/AmaniChowdhury.png' alt='founder-image'></img>

                                    <div className="post-bottom-div">
                                        <div className="post-icons">
                                            <div className="post-icons-left-group">
                                                <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                                <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                                <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                            </div>
                                            <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                        </div>
                                
                                        <div className="post-text">
                                            <p>
                                            <span className="post-account-name">
                                                solucky.life </span> 
                                                MEET AMANI CHOWDHURY (she/her) 🐬
                                                <span className="specific-position">Consultant</span> 
                                            </p>
                                        </div>
                                        
                                    </div>
                                </div>

                                <div className="post-div">
                                    <div className="post-header">
                                        <div className="post-left-group">
                                            <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                            <p className="post-account-name">solucky.life</p>
                                        </div>
                                        <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                    </div>
                                    <img className='post-image' src='../Assets/Team/Team-Pictures/JeannaThottungal.png' alt='founder-image'></img>

                                    <div className="post-bottom-div">
                                        <div className="post-icons">
                                            <div className="post-icons-left-group">
                                                <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                                <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                                <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                            </div>
                                            <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                        </div>
                                
                                        <div className="post-text">
                                            <p>
                                            <span className="post-account-name">
                                                solucky.life </span> 
                                                MEET JEANNA THOTTUNGAL (she/her) 🌊
                                                <span className="specific-position">Assistant Creative Director + Consultant</span> 
                                            </p>
                                        </div>
                                        
                                    </div>
                                </div>
    

                                <div className="post-div">
                                    <div className="post-header">
                                        <div className="post-left-group">
                                            <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                            <p className="post-account-name">solucky.life</p>
                                        </div>
                                        <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                    </div>
                                    <img className='post-image' src='../Assets/Team/Team-Pictures/AnanyaDutta.png' alt='founder-image'></img>

                                    <div className="post-bottom-div">
                                        <div className="post-icons">
                                            <div className="post-icons-left-group">
                                                <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                                <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                                <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                            </div>
                                            <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                        </div>
                                
                                        <div className="post-text">
                                            <p>
                                            <span className="post-account-name">
                                                solucky.life </span> 
                                                MEET ANANYA DUTTA (she/her) ❣️
                                                <span className="specific-position">Consultant</span> 
                                            </p>
                                        </div>
                                        
                                    </div>
                                </div>

                                <div className="post-div">
                                    <div className="post-header">
                                        <div className="post-left-group">
                                            <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                            <p className="post-account-name">solucky.life</p>
                                        </div>
                                        <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                    </div>
                                    <img className='post-image' src='../Assets/Team/Team-Pictures/HenryPham.png' alt='founder-image'></img>

                                    <div className="post-bottom-div">
                                        <div className="post-icons">
                                            <div className="post-icons-left-group">
                                                <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                                <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                                <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                            </div>
                                            <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                        </div>
                                
                                        <div className="post-text">
                                            <p>
                                            <span className="post-account-name">
                                                solucky.life </span> 
                                                MEET HENRY PHAM (he/him) 🩵
                                                <span className="specific-position">Financial Advisor</span> 
                                            </p>
                                        </div>
                                        
                                    </div>
                                </div>

                                <div className="post-div">
                                    <div className="post-header">
                                        <div className="post-left-group">
                                            <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                            <p className="post-account-name">solucky.life</p>
                                        </div>
                                        <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                    </div>
                                    <img className='post-image' src='../Assets/Team/Team-Pictures/NatnaielYishak.png' alt='founder-image'></img>

                                    <div className="post-bottom-div">
                                        <div className="post-icons">
                                            <div className="post-icons-left-group">
                                                <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                                <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                                <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                            </div>
                                            <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                        </div>
                                
                                        <div className="post-text">
                                            <p>
                                            <span className="post-account-name">
                                                solucky.life </span> 
                                                MEET NATNAIEL YISHAK (he/him) 🕶️
                                                <span className="specific-position">Brand Outreach</span> 
                                            </p>
                                        </div>
                                        
                                    </div>
                                </div>
                        </div>
                    </div>

                    <div className="team-category">
                            <h3 className="team-position-title">Production</h3>
                            <div className="scroll-buttons">
                                <button className="scroll-left" onClick={() => scrollLeft('production')}>
                                    <img src="/Assets/Icons/chevron-left.png" alt="arrow-left" style={{ width: '16px', height: '16px' }}></img>
                                </button>
                                <button className="scroll-right" onClick={() => scrollRight('production')}>
                                    <img src="/Assets/Icons/chevron-right.png" alt="arrow-right" style={{ width: '16px', height: '16px' }}></img>
                                </button>
                            </div>
                            <div className="horizontal-scroll-section production">
                            <div className="post-div">
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/AmruthaGururaja.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET AMRUTHA GURURAJA (she/her) 🛞
                                            <span className="specific-position">Brand Photographer</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="post-div">
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/MatthewTran.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET MATTHEW TRAN (he/him) 📹
                                            <span className="specific-position">Brand Photographer + Videographer + Multimedia Editor</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="post-div">
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/RocioSalvatierra.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET ROCIO SALVATIERRA (they/them) ☀️
                                            <span className="specific-position">Brand Photographer</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="post-div">
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/JulianCaballero.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET JULIAN CABALLERO (he/him) 🌿
                                            <span className="specific-position">Brand Photographer</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="post-div">
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/OliviaKinoshita.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET OLIVIA KINOSHITA (she/her) 🌱
                                            <span className="specific-position">Videographer</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="post-div">
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/ArpithaSundarajan.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET ARPITHA SUNDARAJAN (she/her) 🌹
                                            <span className="specific-position">Brand Photographer</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="post-div">
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/JJManchenella.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET JJ MANCHENELLA (she/her) 🍃
                                            <span className="specific-position">Stylist</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="post-div">
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/VedaGott.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET VEDA GOTT (she/her) 👓
                                            <span className="specific-position">Stylist</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="post-div">
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/DonyaMirzazadeh.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET Donya Mirzazadeh (she/her) 🌟
                                            <span className="specific-position">Stylist</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="post-div">
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/AlinaJafri.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET ALINA JAFRI (she/her) 🌺
                                            <span className="specific-position">Stylist</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="post-div">
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/SaajaySingh.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET SAAJAY SINGH (he/him) 🕷️
                                            <span className="specific-position">Stylist</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="post-div">
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/HazoorAnand.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET HAZOOR ANAND (he/him) 🖤
                                            <span className="specific-position">Photo Editor</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="post-div">
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/HenryPham.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET HENRY PHAM (he/him) 🩵
                                            <span className="specific-position">Multimedia Editor</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="social-media">
                        <h3 className="team-position-title">Social media</h3>
                        <div className="horizontal-scroll-section-noscroll">

                            <div className="post-div">
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/JeannaThottungal.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET JEANNA THOTTUNGAL (she/her) 🌊
                                            <span className="specific-position">LinkedIn Manager</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="post-div">
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/SanaKamboh.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET SANA KAMBOH (she/her) 🌸
                                            <span className="specific-position">Pinterest Manager</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="post-div">
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/MikailaBramlette.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET MIKAILA BRAMLETTE (she/her) 🏠
                                            <span className="specific-position">Spotify Manager</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="team-category">
                            <h3 className="team-position-title">Magazine Publishing</h3>
                            <div className="scroll-buttons">
                                <button className="scroll-left" onClick={() => scrollLeft('magazine-publishing')}>
                                    <img src="/Assets/Icons/chevron-left.png" alt="arrow-left" style={{ width: '16px', height: '16px' }}></img>
                                </button>
                                <button className="scroll-right" onClick={() => scrollRight('magazine-publishing')}>
                                    <img src="/Assets/Icons/chevron-right.png" alt="arrow-right" style={{ width: '16px', height: '16px' }}></img>
                                </button>
                            </div>
                            <div className="horizontal-scroll-section magazine-publishing">
                            <div className="post-div">
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/HenryPham.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET HENRY PHAM (he/him) 🩵
                                            <span className="specific-position">Magazine Editor + <i>For The Community Columnist</i></span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="post-div">
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/AarushiSharma.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET AARUSHI SHARMA (she/her) 🪴 
                                            <span className="specific-position">Magazine Designer</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="post-div">
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/HazoorAnand.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET HAZOOR ANAND (he/him) 🖤
                                            <span className="specific-position">Magazine Designer</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="post-div">
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/AnujaPandit.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET ANJUA PANDIT (she/her) 🖤
                                            <span className="specific-position">Magazine Designer</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="post-div">
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/MikailaBramlette.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET MIKAILA BRAMLETTE (she/her) 🏠
                                            <span className="specific-position"><i> Small Business Spotlight + Spotify Playlist </i>Columinst</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="post-div">
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/JoseangelPena-Gutierrez.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET JOSEANGEL PEÑA-GUTIERREZ (he/him) 🐾
                                            <span className="specific-position"><i>Creator Spotlight </i>Columinst</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="post-div">
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/InikaMehra.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET INIKA MEHRA (she/her) 🎀
                                            <span className="specific-position">Filler-In Writer</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="post-div">
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/SraavyaApuri.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET SRAAVYA APURI (she/her) ♠️
                                            <span className="specific-position">Filler-In Writer</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="post-div">
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/SafaBasravi.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET SAFA BASRAVI (she/her) 🧸
                                            <span className="specific-position">Filler-In Writer</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="team-category">
                            <h3 className="team-position-title">Aesthetic Photographers</h3>
                            <div className="scroll-buttons">
                                <button className="scroll-left" onClick={() => scrollLeft('aesthetic-photographers')}>
                                    <img src="/Assets/Icons/chevron-left.png" alt="arrow-left" style={{ width: '16px', height: '16px' }}></img>
                                </button>
                                <button className="scroll-right" onClick={() => scrollRight('aesthetic-photographers')}>
                                    <img src="/Assets/Icons/chevron-right.png" alt="arrow-right" style={{ width: '16px', height: '16px' }}></img>
                                </button>
                            </div>
                            <div className="horizontal-scroll-section aesthetic-photographers">

                            <div className="post-div">
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/SanjanaDadi.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET SANJANA DADI (she/her) 🦋
                                            <span className="specific-position">Aesthetic Photographer</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="post-div">
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/NatalieGetz.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET NATALIE GETZ (she/her) 🪷 
                                            <span className="specific-position">Aesthetic Photographer</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="post-div">
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/HeenaBains.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET HEENA BAINS (she/her) 🥂
                                            <span className="specific-position">Aesthetic Photographer</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="post-div">
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/AarushiSharma.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET AARUSHI SHARMA (she/her) 🪴
                                            <span className="specific-position">Aesthetic Photographer</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="post-div">
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/NiyaMaudgalya.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET NIYA MAUDGALYA (she/her) 🌞
                                            <span className="specific-position">Aesthetic Photographer</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="post-div">
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/ChinmayiBolisetty.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET CHINMAYI BOLISETTY (she/her) 🌃
                                            <span className="specific-position">Aesthetic Photographer</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="post-div">
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/CynOros.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET CYN OROS (they/them) 🐆
                                            <span className="specific-position">Aesthetic Photographer</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="post-div">
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/KarthikPunati.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET KARTHIK PUNATI (he/him) 🌸
                                            <span className="specific-position">Aesthetic Photographer</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </div>

                        </div>
                    </div>
                    
                </div>
            </section>

            <Footer/>
        </div>
    );
}

export default Team