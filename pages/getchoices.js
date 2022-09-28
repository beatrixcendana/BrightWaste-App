import Head from 'next/head';
import styles from '../styles/getchoices.module.css';
import Swal from 'sweetalert2';

import { fetchUser, userAccessToken } from '../utils/fetchUserDetails';

// import all images
import Image from 'next/image';
import SixDrawer from '../public/images/Pict 6_Drawer.jpg';
import ShelfBook from '../public/images/Pict 7_ShelfBook.jpg';
import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

export default function GetChoices() {

    const [ offerData, setOfferData ] = useState('');
   
    const [ user, setUser ] = useState({});
    const router = useRouter();

    useEffect(() => {
        const accessToken = userAccessToken();

        if (!accessToken) {
            window.location.href = "/";
            Swal.fire('Please logged in first!');
        } else {
            const [ userInfo ] = fetchUser();            
            setUser(userInfo);
        }

    }, [])
    
    const submitOffer = async (paramEmail) => {
        
        let postData = {
            "email": paramEmail
        };

       Swal.fire({
        title: 'Please wait...',
        didOpen() {
            Swal.showLoading();

            setTimeout(() => {
                Swal.close();
            }, 4000)

        }, 
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false
       })

        const response = await fetch('/api/sendNotification', {
            method: 'POST',
            body: JSON.stringify({ postData }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json();
        
    }

    return (

        <div className="container" style={{ marginBottom: '300px' }}>

            <Head>
                <title>Get Choices</title>
            </Head>
            
            <div className="row mb-4 mt-4" styles={{ marginTop: '15%', marginBottom: '5%' }}>
            
                <p className={styles.ChoicesTitle}>Product Upload Form</p>
             
                <div className={styles.LeftRight}>
                    <button className = {styles.ChoicesDescribe}> {/* Describe text */}
                        Describe
                    </button>
                    <p className= {styles.GetChoice}> {/* get choices text */}
                        Get Choices
                    </p>
                    <div style={{ clear: 'both' }}></div>
                </div>

                <div className={styles.LineOne}></div>
    
                {/* 1ST CHOICE */}
                <div className='col-lg-12 col-sm-12 col-md-12' style={{ marginTop: '100px' }}>
                    <p className={styles.FirstChoice}>
                        First choice: Sell it to Home Depot
                    </p>
                    <p className={styles.HomeDpt1}>
                        Address: 1450 Marvin Rd NE, Lacey WA 98516
                    </p>
                    <p className={styles.HomeDpt3}>
                    Instructions will be sent via email notification. Make sure to check your email in 24 hours.
                    </p>
                    <p className={styles.OrTxt}>
                        OR 
                    </p>
                </div>

                <button className={styles.BtnChoose} 
                style={{ marginTop: '430px',
                textAlign: 'center'
                }}
                >Choose</button>

                {/* 2nd CHOICE */}
                <div className='col-lg-12 col-sm-12 col-md-12'>
                    <p className={styles.SecondChoice}>
                        Second choice: Upcycling
                    </p>
                    <p className={styles.UpDesc}>
                        Price will be much higher if you do upcycling.
                    </p>
                    <p className={styles.HomeDpt2}>
                        Price Range: $15 - $25
                    </p>
                </div>
                

                {/* DIY CHOICE 1 */}
               <div className='col-lg-12 col-md-8 col-sm-8'>
                    <div className= "card border-0 shadow shadow-sm" style={{ 
                        backgroundColor: '#E3F0EE', 
                        width: '1000px',
                        height: '288px', 
                        borderRadius: '15px', 
                        // left: '480px', 
                        marginTop: '620px'
                    }}> 
                        <div className='card-body'>
                            <div className='row'>
                                <div className='input-group'>
                                    <p className= {styles.DiyTitle1} style = {{marginTop: '4px', marginLeft: '216px'}}> {/* fix card 1 text */}
                                    DIY CHOICE #1: Grey Drawer $45 - $55
                                    </p>

                                    <p className= {styles.DiyDesc1} style = {{marginTop: '88px', marginLeft: '216px'}}> 
                                        Follow this <a className = {styles.hyperlink1} href = "https://www.recreateddesigns.com/2021/03/turn-broken-drawer-into-wood-shelve-diy/" target="_blank">step</a> to view more our easy steps. You can save this form
                                        and submit the offer later when you are done upcycling the product.
                                    </p>

                                    {/* Save button */}
                                    <button className={styles.BtnSave} style = {{marginTop: '184px', marginLeft: '216px'}}>Save</button>

                                    {/* Submit button */}
                                    <button className={styles.BtnSubmit1} 
                                    style = {{marginTop: '184px', marginLeft: '380px'}}
                                    onClick={ () => submitOffer(user.email) }
                                    >Submit offer</button>

                                    {/* Image1 can't be placed in the right side - not working*/}
                                    <Image src={SixDrawer} width={188} height={188} className= {styles.SixDrawer} style = {{float: 'right', left: '100px'}}/>

                                    {/* Address text under image */}
                                    <p className= {styles.Address1} style = {{marginTop: '200px', marginLeft: '14px'}}>
                                    Store: Walmart 123 Jackson St
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div> 

                </div>

                {/* DIY CHOICE 2 */}
                <div className='col-lg-12 col-md-8 col-sm-8'>
                    <div className= "card border-0 shadow shadow-sm" style={{ 
                        backgroundColor: '#E3F0EE', 
                        width: '1000px',
                        height: '288px', 
                        borderRadius: '15px', 
                        // left: '480px', 
                        marginTop: '40px'
                    }}> 
                        <div className='card-body'>
                            <div className='row'>
                                <div className='input-group'>
                                    <p className= {styles.DiyTitle1} style = {{marginTop: '4px', marginLeft: '216px'}}> {/* fix card 1 text */}
                                        DIY CHOICE #2: Book Shelf
                                        $35 - $40
                                    </p>

                                    <p className= {styles.DiyDesc1} style = {{marginTop: '88px', marginLeft: '216px'}}> 
                                    Follow this <a className = {styles.hyperlink1} href = "https://www.recreateddesigns.com/2021/03/turn-broken-drawer-into-wood-shelve-diy/" target="_blank">step</a> to view more our easy steps. You can save this form
                                    and submit the offer later when you are done upcycling the product.
                                    </p>

                                    {/* Save button */}
                                    <button className={styles.BtnSave} style = {{marginTop: '184px', marginLeft: '216px'}}>Save</button>

                                    {/* Submit button */}
                                    <button className={styles.BtnSubmit1} 
                                    style = {{marginTop: '184px', marginLeft: '380px'}}
                                    onClick={ () => submitOffer(user.email) }
                                    >Submit offer</button>

                                    {/* Image2 can't be placed in the right side - not working*/}
                                    <Image src={ShelfBook} width={188} height={188} className= {styles.SixDrawer} style = {{float: 'right', marginLeft: '100px'}}/>

                                    {/* Address text under image */}
                                    <p className= {styles.Address1} style = {{marginTop: '200px', marginLeft: '14px'}}>
                                    Store: Target 500 Lakewood Dr
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