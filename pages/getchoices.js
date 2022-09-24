import Head from 'next/head';
import styles from '../styles/getchoices.module.css';

// import all images
import SixDrawer from '../public/images/Pict 6_Drawer.jpg';
import ShelfBook from '../public/images/Pict 7_ShelfBook.jpg';

export default function GetChoices() {
    return (
        <div className="content">
            <Head>
                <title>Get Choices</title>
            </Head>
            <div className="row mb-4 mt-4" styles={{ marginTop: '15%', marginBottom: '5%' }}>
                <div className="col-12">
                    <div align = "center">
                    <p className={styles.ChoicesTitle}> {/* Title of Product Upload Form */}
                        Product Upload Form
                    </p>
                    </div>
                <div id = "LeftRight">
                    <p className = {styles.ChoicesDescribe}> {/* Describe text */}
                        Describe
                    </p>
                    <p className= {styles.GetChoice}> {/* get choices text */}
                        Get Choices
                    </p>
                    <div styles="clear: both;"></div>
                </div>

                {/* Create line */}
                <div className="line">
                    <hr className={styles.LineOne}/>
                </div>

                {/* Sell it to Home depot description text */}
                <div className="HomeDepot">
                    <p className={styles.FirstChoice}>
                        First choice: Sell it to Home Depot
                    </p>
                </div>

                <div className= "HomeDepot1">
                    <p className={styles.HomeDpt1}>
                        Address: 1450 Marvin Rd NE, Lacey WA 98516
                    </p>
                </div>

                <div className= "HomeDepot2">
                    <p className={styles.HomeDpt2}>
                        Price Range: $15 - $25
                    </p>
                </div>
               
                <div className= "HomeDepot3">
                    <p className={styles.HomeDpt3}>
                    Instructions will be sent via email notification. 
                    </p>
                </div>

                <div className= "HomeDepot4">
                    <p className={styles.HomeDpt4}>
                    Make sure to check your email in 24 hours.
                    </p>
                </div>
                
                <button className={styles.BtnChoose}>Choose</button>
                    
                
                {/* OR text */}
                <div className="OrText">
                    <p className={styles.OrTxt}>
                        OR 
                    </p>
                </div>

                {/* Upcycle description text*/}
                <div className= "UpcycleTitle">
                    <p className={styles.SecondChoice}>
                        Second choice: Upcycling
                    </p>
                </div>

                <div className= "UpcycleDesc">
                    <p className={styles.UpDesc}>
                        Price will be much higher if you do upcycling.
                    </p>
                </div>

                {/* DIY Choice #1 - the box doesn't want to go down and go center. I guess there is no more space or footer problem*/}
          <div className= "card1" style={{ 
            backgroundColor: '#E3F0EE', width: '1000px',
            height: '288px', borderRadius: '15px', left: '480px', top: '1051px'
          }}> {/* fix card size */}
            <div className='card-body'>
              <div className='row'>
                <div className='input-group'>
                  <p className= {styles.DiyTitle1} style = {{marginTop: '16px', marginLeft: '24px'}}> {/* fix card 1 text */}
                  DIY CHOICE #1: Grey Drawer $45 - $55
                  </p>
                </div>

              </div>
            </div>
          </div>
                </div>
            </div>
        </div>
    );
}