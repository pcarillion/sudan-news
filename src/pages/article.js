import React from "react"

// plugins
import {graphql} from 'gatsby'
import Img from 'gatsby-image'
import { Helmet } from "react-helmet"

// css et script
import styles from '../styles/index.module.css'
// import '../scripts/script'

// js
import Layout from '../components/Layout'

export default function Article() {

  return <Layout>
    {props =>(
      <div className={styles.container} style={{marginLeft: `${props.close? '0px': '260px'}`}}>
        <div className={`${styles.header} ${props.dark_mode && styles.headerDm}`} style={{height: '65px', width: `${props.close ? 'calc(100vw - 66px)': 'calc(100vw - 260px - 66px)'}`}}>
                        <h1 style={props.close? {marginLeft: '150px'} : {marginLeft: '0'}}>La révolution ne s'arrête pas</h1>
                        <p className={'header-p'}>20 Septembre 2020 | Mona Basha</p>
                    </div>
        <div className={props.dark_mode? styles.articledm : styles.article} style={props.close? {} : {}}>
          {props.the_lang == 'fr' && <h1>
            La révolution ne s'arrête pas
          </h1>}
          {props.the_lang == 'ar' && <h1 dir="rtl" classNam="arab-text">
          نموذج لوريم ايبسوم عربي -  فرانكوا اراب 
          </h1>}
          {props.the_lang == 'fr' && <h3>
            Un an après la chute du régime, les manifestations continuent à Khartoum et la répression ne s'arrête pas.
          </h3>}
          {props.the_lang == 'ar' && <h3 dir="rtl" classNam="arab-text">
            "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور

            أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد

            أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس

            أيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت

            نيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا

            كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم."
          </h3>}
          {props.the_lang == 'fr' && <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lobortis quis ligula eget commodo. Donec malesuada vel urna eget tincidunt. Praesent posuere sodales lorem non imperdiet. Proin fringilla lorem sapien, eget luctus ipsum vestibulum ac. Suspendisse ac erat sed lorem egestas sodales. Ut sed feugiat mi. Duis luctus a dolor eu faucibus. Morbi iaculis libero et purus euismod accumsan. Suspendisse vitae orci eu turpis semper pellentesque a ac libero. Sed elementum, quam vitae lobortis dapibus, nisi augue placerat libero, non maximus magna orci vitae velit. Vivamus et tincidunt arcu. Mauris id fringilla turpis, vel laoreet erat. Aenean posuere enim eu scelerisque tristique.
          </p>}
          {props.the_lang == 'ar' && <p dir="rtl" classNam="arab-text">
            "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور

            أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد

            أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس

            أيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت

            نيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا

            كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم."
          </p>}
          {props.the_lang == 'fr' && <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lobortis quis ligula eget commodo. Donec malesuada vel urna eget tincidunt. Praesent posuere sodales lorem non imperdiet. Proin fringilla lorem sapien, eget luctus ipsum vestibulum ac. Suspendisse ac erat sed lorem egestas sodales. Ut sed feugiat mi. Duis luctus a dolor eu faucibus. Morbi iaculis libero et purus euismod accumsan. Suspendisse vitae orci eu turpis semper pellentesque a ac libero. Sed elementum, quam vitae lobortis dapibus, nisi augue placerat libero, non maximus magna orci vitae velit. Vivamus et tincidunt arcu. Mauris id fringilla turpis, vel laoreet erat. Aenean posuere enim eu scelerisque tristique.
          </p>}
          {props.the_lang == 'ar' && <p dir="rtl" classNam="arab-text">
            "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور

            أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد

            أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس

            أيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت

            نيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا

            كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم."
          </p>}{props.the_lang == 'fr' && <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lobortis quis ligula eget commodo. Donec malesuada vel urna eget tincidunt. Praesent posuere sodales lorem non imperdiet. Proin fringilla lorem sapien, eget luctus ipsum vestibulum ac. Suspendisse ac erat sed lorem egestas sodales. Ut sed feugiat mi. Duis luctus a dolor eu faucibus. Morbi iaculis libero et purus euismod accumsan. Suspendisse vitae orci eu turpis semper pellentesque a ac libero. Sed elementum, quam vitae lobortis dapibus, nisi augue placerat libero, non maximus magna orci vitae velit. Vivamus et tincidunt arcu. Mauris id fringilla turpis, vel laoreet erat. Aenean posuere enim eu scelerisque tristique.
          </p>}
          {props.the_lang == 'ar' && <p dir="rtl" classNam="arab-text">
            "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور

            أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد

            أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس

            أيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت

            نيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا

            كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم."
          </p>}{props.the_lang == 'fr' && <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lobortis quis ligula eget commodo. Donec malesuada vel urna eget tincidunt. Praesent posuere sodales lorem non imperdiet. Proin fringilla lorem sapien, eget luctus ipsum vestibulum ac. Suspendisse ac erat sed lorem egestas sodales. Ut sed feugiat mi. Duis luctus a dolor eu faucibus. Morbi iaculis libero et purus euismod accumsan. Suspendisse vitae orci eu turpis semper pellentesque a ac libero. Sed elementum, quam vitae lobortis dapibus, nisi augue placerat libero, non maximus magna orci vitae velit. Vivamus et tincidunt arcu. Mauris id fringilla turpis, vel laoreet erat. Aenean posuere enim eu scelerisque tristique.
          </p>}
          {props.the_lang == 'ar' && <p dir="rtl" classNam="arab-text">
            "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور

            أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد

            أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس

            أيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت

            نيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا

            كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم."
          </p>}{props.the_lang == 'fr' && <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lobortis quis ligula eget commodo. Donec malesuada vel urna eget tincidunt. Praesent posuere sodales lorem non imperdiet. Proin fringilla lorem sapien, eget luctus ipsum vestibulum ac. Suspendisse ac erat sed lorem egestas sodales. Ut sed feugiat mi. Duis luctus a dolor eu faucibus. Morbi iaculis libero et purus euismod accumsan. Suspendisse vitae orci eu turpis semper pellentesque a ac libero. Sed elementum, quam vitae lobortis dapibus, nisi augue placerat libero, non maximus magna orci vitae velit. Vivamus et tincidunt arcu. Mauris id fringilla turpis, vel laoreet erat. Aenean posuere enim eu scelerisque tristique.
          </p>}
          {props.the_lang == 'ar' && <p dir="rtl" classNam="arab-text">
            "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور

            أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد

            أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس

            أيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت

            نيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا

            كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم."
          </p>}{props.the_lang == 'fr' && <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lobortis quis ligula eget commodo. Donec malesuada vel urna eget tincidunt. Praesent posuere sodales lorem non imperdiet. Proin fringilla lorem sapien, eget luctus ipsum vestibulum ac. Suspendisse ac erat sed lorem egestas sodales. Ut sed feugiat mi. Duis luctus a dolor eu faucibus. Morbi iaculis libero et purus euismod accumsan. Suspendisse vitae orci eu turpis semper pellentesque a ac libero. Sed elementum, quam vitae lobortis dapibus, nisi augue placerat libero, non maximus magna orci vitae velit. Vivamus et tincidunt arcu. Mauris id fringilla turpis, vel laoreet erat. Aenean posuere enim eu scelerisque tristique.
          </p>}
          {props.the_lang == 'ar' && <p dir="rtl" classNam="arab-text">
            "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور

            أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد

            أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس

            أيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت

            نيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا

            كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم."
          </p>}
                    
        </div>
      </div>
      )}

  </Layout>
}




