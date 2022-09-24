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
                
                <div className='col-12 col-lg-12 col-md-12 col-sm-12'>

                    <div className="text-center">
                        <p className={styles.ChoicesTitle}> {/* Title of Product Upload Form */}
                            Product Upload Form
                        </p>
                    </div>
                
                    <div className={styles.LeftRight}>
                        <p className = {styles.ChoicesDescribe}> {/* Describe text */}
                            Describe
                        </p>
                        <p className= {styles.GetChoice}> {/* get choices text */}
                            Get Choices
                        </p>
                        <div style={{ clear: 'both' }}></div>
                    </div>

                    {/* Create line */}
                    <div className="line">
                        <hr className={styles.LineOne}/>
                    </div>

                    {/* Sell it to Home depot description text */}
                    <div className={styles.HomeDepot}>
                        <p className={styles.FirstChoice}>
                            First choice: Sell it to Home Depot
                        </p>
                    </div>

                    <div className={styles.HomeDepot1}>
                        <p className={styles.HomeDpt1}>
                            Address: 1450 Marvin Rd NE, Lacey WA 98516
                        </p>
                    </div>

                    <div className={styles.HomeDepot2}>
                        <p className={styles.HomeDpt2}>
                            Price Range: $15 - $25
                        </p>
                    </div>
                
                    <div className={styles.HomeDepot3}>
                        <p className={styles.HomeDpt3}>
                        Instructions will be sent via email notification. 
                        </p>
                    </div>

                    <div className={styles.HomeDepot4}>
                        <p className={styles.HomeDpt4}>
                        Make sure to check your email in 24 hours.
                        </p>
                    </div>
                    
                    <button className={styles.BtnChoose}>Choose</button>
                    
                    {/* OR text */}
                    <div className={styles.OrText}>
                        <p className={styles.OrTxt}>
                            OR 
                        </p>
                    </div>

                    {/* Upcycle description text*/}
                    <div className={styles.UpcycleTitle}>
                        <p className={styles.SecondChoice}>
                            Second choice: Upcycling
                        </p>
                    </div>

                    <div className={styles.UpcycleDesc}>
                        <p className={styles.UpDesc}>
                            Price will be much higher if you do upcycling.
                        </p>
                    </div>

                </div>

                {/* DIY CHOICE 1 */}
               <div className='col-lg-12 col-md-12 col-sm-12' style={{ marginTop: '-14%' }}>
                    <div className= "card border-0 shadow shadow-sm" style={{ 
                        backgroundColor: '#E3F0EE', 
                        width: '1000px',
                        height: '288px', 
                        borderRadius: '15px', 
                        left: '480px', 
                        top: '1051px'
                    }}> 
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

                {/* DIY CHOICE 2 */}
                <div className='col-lg-12 col-md-12 col-sm-12'>
                    <div className= "card border-0 shadow shadow-sm" style={{ 
                        backgroundColor: '#E3F0EE', 
                        width: '1000px',
                        height: '288px', 
                        borderRadius: '15px', 
                        left: '480px', 
                        top: '1051px'
                    }}> 
                        <div className='card-body'>
                            <div className='row'>
                                <div className='input-group'>
                                    <p className= {styles.DiyTitle1} style = {{marginTop: '16px', marginLeft: '24px'}}> {/* fix card 1 text */}
                                        DIY CHOICE #2: Book Shelf
                                        $35 - $40
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