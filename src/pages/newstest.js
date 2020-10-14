import React ,{ useState, useEffect }  from 'react';



// js
import Layout from '../components/Layout'

// css 
import style from '../styles/category.module.css'

const News = () => {

    // const [scrolling, setScrolling] = useState(false);
    // const [scrollTop, setScrollTop] = useState(0);
    // const [pIsHidden, setpIsHidden] = useState(false);
    // const [headerHeight, setHeaderHight] = useState('85px')

    // useEffect(() => {
    //     const onScroll = e => {
    //       setScrollTop(e.target.documentElement.scrollTop);
    //       setScrolling(e.target.documentElement.scrollTop > scrollTop);
    //       setpIsHidden(scrollTop > 16)
    //       if (scrollTop > 16) {
    //           console.log(scrollTop)
    //           let height = 85 - scrollTop
    //           setHeaderHight(`${height}px`);
    //       }
    //       if (scrollTop < 16) {
    //         setHeaderHight(`85px`);
    //       }
    //     };
    //     window.addEventListener("scroll", onScroll);
    
    //     return () => window.removeEventListener("scroll", onScroll);
    //   }, [scrollTop]);
        


    return (
        <Layout>
            {props =>(
                <div className={style.container} style={{marginLeft: `${props.close? '0px': '260px'}`}}>
                    <div className={`${style.header} ${props.dark_mode && style.headerDm}`} style={{height: '95px', width: `${props.close ? 'calc(100vw - 51px)': 'calc(100vw - 260px)'}`}}>
                        <h1 style={props.close? {marginLeft: '150px'} : {marginLeft: '0'}}>News</h1>
                        <p className={'header-p'}>Ceci est la section News dans laquelle sont écrites des brèves sur l'actualité au Soudan</p>
                    </div>
                    <div className={style.presentationsContainer}>
                    <div className={style.articlePresentation}
                        style={props.dark_mode?{backgroundColor : 'black'}:{backgroundColor : 'white'}}
                        >
                            <div className={style.thumbnailDiv} style={{backgroundImage : 'linear-gradient(to right, rgba(51, 51, 51, 0.7), rgba(51, 51, 51, 0.3)), url(https://resize-europe1.lanmedia.fr/f/webp/r/622,311,forcex,center-middle/img/var/europe1/storage/images/europe1/international/soudan-une-centaine-de-morts-dans-des-inondations-2820592/28428526-1-fre-FR/Soudan-une-centaine-de-morts-dans-des-inondations.png)'}}>
                                <div className={style.articleText}>
                                    <h2>
                                        Les inondations au Soudan
                                    </h2>
                                    <p>
                                        Mona Basha | 30 septembre 2020 <br/>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lobortis quis ligula eget commodo. Donec malesuada vel urna eget tincidunt. Praesent posuere sodales lorem non imperdiet. Proin fringilla lorem sapien, eget luctus ipsum vestibulum ac. Suspendisse ac erat sed lorem egestas sodales. Ut sed feugiat mi. Duis luctus a dolor eu faucibus. 
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={style.articlePresentation}
                        style={props.dark_mode?{backgroundColor : 'black'}:{backgroundColor : 'white'}}
                        >
                            <div className={style.thumbnailDiv} style={{backgroundImage : 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://s.rfi.fr/media/display/4cf389ae-f299-11ea-b381-005056bf87d6/w:1280/p:16x9/2020-09-09t081947z_1088983121_rc2wui9d2l52_rtrmadp_3_sudan-floods_0.webp)'}}>
                                <div className={style.articleText}>
                                    <h2>
                                        Les inondations au Soudan
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lobortis quis ligula eget commodo. Donec malesuada vel urna eget tincidunt. Praesent posuere sodales lorem non imperdiet. Proin fringilla lorem sapien, eget luctus ipsum vestibulum ac. Suspendisse ac erat sed lorem egestas sodales. Ut sed feugiat mi. Duis luctus a dolor eu faucibus. 

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={style.articlePresentation}
                        style={props.dark_mode?{backgroundColor : 'black'}:{backgroundColor : 'white'}}
                        >
                            <div className={style.thumbnailDiv} style={{backgroundImage : 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://www.francetvinfo.fr/image/75njd3yyv-27e8/1200/450/19932711.jpg)'}}>
                                <div className={style.articleText}>
                                    <h2>
                                        Les inondations au Soudan
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lobortis quis ligula eget commodo. Donec malesuada vel urna eget tincidunt. Praesent posuere sodales lorem non imperdiet. Proin fringilla lorem sapien, eget luctus ipsum vestibulum ac. Suspendisse ac erat sed lorem egestas sodales. Ut sed feugiat mi. Duis luctus a dolor eu faucibus. 

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={style.articlePresentation}
                        style={props.dark_mode?{backgroundColor : 'black'}:{backgroundColor : 'white'}}
                        >
                            <div className={style.thumbnailDiv} style={{backgroundImage : 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://resize-europe1.lanmedia.fr/f/webp/r/622,311,forcex,center-middle/img/var/europe1/storage/images/europe1/international/soudan-une-centaine-de-morts-dans-des-inondations-2820592/28428526-1-fre-FR/Soudan-une-centaine-de-morts-dans-des-inondations.png)'}}>
                                <div className={style.articleText}>
                                    <h2>
                                        Les inondations au Soudan
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lobortis quis ligula eget commodo. Donec malesuada vel urna eget tincidunt. Praesent posuere sodales lorem non imperdiet. Proin fringilla lorem sapien, eget luctus ipsum vestibulum ac. Suspendisse ac erat sed lorem egestas sodales. Ut sed feugiat mi. Duis luctus a dolor eu faucibus. 

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={style.articlePresentation}
                        style={props.dark_mode?{backgroundColor : 'black'}:{backgroundColor : 'white'}}
                        >
                            <div className={style.thumbnailDiv} style={{backgroundImage : 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://resize-europe1.lanmedia.fr/f/webp/r/622,311,forcex,center-middle/img/var/europe1/storage/images/europe1/international/soudan-une-centaine-de-morts-dans-des-inondations-2820592/28428526-1-fre-FR/Soudan-une-centaine-de-morts-dans-des-inondations.png)'}}>
                                <div className={style.articleText}>
                                    <h2>
                                        Les inondations au Soudan
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lobortis quis ligula eget commodo. Donec malesuada vel urna eget tincidunt. Praesent posuere sodales lorem non imperdiet. Proin fringilla lorem sapien, eget luctus ipsum vestibulum ac. Suspendisse ac erat sed lorem egestas sodales. Ut sed feugiat mi. Duis luctus a dolor eu faucibus. 

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={style.articlePresentation}
                        style={props.dark_mode?{backgroundColor : 'black'}:{backgroundColor : 'white'}}
                        >
                            <div className={style.thumbnailDiv} style={{backgroundImage : 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://resize-europe1.lanmedia.fr/f/webp/r/622,311,forcex,center-middle/img/var/europe1/storage/images/europe1/international/soudan-une-centaine-de-morts-dans-des-inondations-2820592/28428526-1-fre-FR/Soudan-une-centaine-de-morts-dans-des-inondations.png)'}}>
                                <div className={style.articleText}>
                                    <h2>
                                        Les inondations au Soudan
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lobortis quis ligula eget commodo. Donec malesuada vel urna eget tincidunt. Praesent posuere sodales lorem non imperdiet. Proin fringilla lorem sapien, eget luctus ipsum vestibulum ac. Suspendisse ac erat sed lorem egestas sodales. Ut sed feugiat mi. Duis luctus a dolor eu faucibus. 

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={style.articlePresentation}
                        style={props.dark_mode?{backgroundColor : 'black'}:{backgroundColor : 'white'}}
                        >
                            <div className={style.thumbnailDiv} style={{backgroundImage : 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://resize-europe1.lanmedia.fr/f/webp/r/622,311,forcex,center-middle/img/var/europe1/storage/images/europe1/international/soudan-une-centaine-de-morts-dans-des-inondations-2820592/28428526-1-fre-FR/Soudan-une-centaine-de-morts-dans-des-inondations.png)'}}>
                                <div className={style.articleText}>
                                    <h2>
                                        Les inondations au Soudan
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lobortis quis ligula eget commodo. Donec malesuada vel urna eget tincidunt. Praesent posuere sodales lorem non imperdiet. Proin fringilla lorem sapien, eget luctus ipsum vestibulum ac. Suspendisse ac erat sed lorem egestas sodales. Ut sed feugiat mi. Duis luctus a dolor eu faucibus. 

                                    </p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
            </div>)}
        </Layout>
    )
}

export default News
