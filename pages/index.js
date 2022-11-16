import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { FcGoogle } from 'react-icons/fc';
import { useRouter } from 'next/router';

// firebase 
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { firebaseApp } from '../firebase';

// 1. LANDING PAGE (THE TOP)
import Image from 'next/image';
import EarthImgUrl from '../public/images/Pict_earth1.png';
import SearchIconUrl from '../public/images/Icon_Search.png';
import LocationIconUrl from '../public/images/Icon_Location.png';
import PotImgUrl from '../public/images/Pict_pot2.jpg';
import WasteImgUrl from '../public/images/Pict_waste3.jpg';
import CommunityImgUrl from '../public/images/Pict_community4.jpg';

// 2. HOW IT WORKS IMAGE URL
import PicGuyImgUrl from '../public/images/Pict_guy1.jpg';
import PicChangeImgUrl from '../public/images/Pict_change2.jpg';
import IconPictureUrl from '../public/images/Icon_picture.png';
import IconDescribeUrl from '../public/images/Icon_describe.png';
import IconMoneyUrl from '../public/images/Icon_money.png';
import IconSubmitUrl from '../public/images/Icon_submit.png';

// 3. FEATURED COLLECTIONS 
import PicChairUrl from '../public/images/Pict_chair1.jpg';
import PicBoardUrl from '../public/images/Pict_board2.jpg';
import PicPlaateUrl from '../public/images/Pict_plate3.jpg';
import PicWoodUrl from '../public/images/Pict_wood4.jpg';

// 4. WEEKLY DAILY TIPS 
import PicSust from '../public/images/Pict_sustainability1.jpg';
import PicPlastic from '../public/images/Pict_plastic2.jpg';

const SignInModal = () => {

  const firebaseAuth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();

  const router = useRouter();
  
  const signIn = async () => {
    const { user } =  await signInWithPopup(firebaseAuth, provider)
    const { refreshToken, providerData } = user;

    localStorage.setItem('user', JSON.stringify(providerData));
    localStorage.setItem('accessToken', JSON.stringify(refreshToken));

    window.location.href = "/submission"

  }

  return (
  <div 
    className='modal modal-alert bg-transparent py-5'
    tabIndex="-1"
    role="dialog"
    id="signup"
    >
      <div className='modal-dialog modal-dialog-centered' role="document">
        <div className='modal-content rounded-4 shadow'>
          <div className='modal-body p-4 text-center'>
            <h5 className='mb-0'>Sign / Login</h5>
            <div className='mt-4 mb-4'>
              <button className='btn btn-lg bg-primary text-white fw-bold'
              onClick={signIn}
              >
                <span>Sign in with Google</span>
                <FcGoogle fontSize={30}/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {

  return (
    <div>
      <Head>
        <title>Homepage</title>
        <meta name="viewport" content="initial-scale=1.0,width=device-width" />
      </Head>
      {/* SECTION 1 LANDING PAGE (THE TOP) */}

      <SignInModal/>

      <div className="row mb-4 mt-4" style={{ marginTop: '35%', marginBottom: '5%' }}>

        <div className="col-6" style={{ marginTop: '3%' }}>
          <div className='text-center'>
            <Image src={EarthImgUrl} width={591} height={677} /> 
          </div>
        </div>

        <div className="col-6 p-5">
          <p className={styles.head}>
            Get higher value for your used materials 
            and <span className="fw-bold">help earth to reduce
            the waste </span> and <span className="fw-bold">lead society to
            a brighter future</span> 
          </p>

          <div className='row'>
            <div className='col-4'>
              <div className={styles.search}>
                <div className='input-group flex-nowrap'>

                  {/* TEXTFIELD INPUT ITEM NAME */}
                  <Image src={SearchIconUrl} width={40} height={40}/> {/* fix searchicon size */}
                  <input placeholder="What type of stuff are you looking for?" className={styles.input} />

                  {/* TEXTFIELD SET LOCATION */}
                  <Image src={LocationIconUrl} width={40} height={40}/> {/* fix locationicon size */}
                  <input placeholder="Location" className={styles.LocationInput} />

                </div>
              </div>  
            </div>
          </div>

          <div className='row mt-3 mb-3'>
            <button className={styles.BtnFindOut}>Find Out</button>
          </div>

          <div className='row mt-4 mb-4'>
            <div className='col-4'>
              <Image src={PotImgUrl} width={219} height={219} className= {styles.PotImgUrl}/>
            </div>
            <div className='col-4'>
              <Image src={WasteImgUrl} width={219} height={219} className= {styles.WasteImgUrl}/> 
            </div>
            <div className='col-4'>
              <Image src={CommunityImgUrl} width={219} height={219} className= {styles.CommunityImgUrl}/> 
            </div>
          </div>
        </div>

      </div>

      {/* SECTION 2 HOW IT WORKS */}
      <div className='row' style={{ marginTop: '5%', marginBottom: '5%' }}>
        <div className='col-6'>
          
          <div className='text-center'>

          <div style={{ marginLeft: '-100px' }}>
            <Image src={PicGuyImgUrl} className={styles.PicGuyClass} width={413} height={413}/>
          </div>

          <div style={{ marginLeft: '287px', marginTop: '-120px' }}>
            <Image src={PicChangeImgUrl} className={styles.PicChangeClass} width={414} height={413}/>
          </div>

          </div>


        </div>
        
        <div className='col-6'>

          <p className={styles.subhead}>How it works?</p>

          {/* CARD DESCRIBE */}
          <div className="card" style={{ 
            backgroundColor: '#C0ECE3',
            boxShadow: '5px 5px 4px rgba(28, 20, 141, 0.3)', width:'841px'
          }}> {/* fix card size */}
            <div className='card-body'>
              <div className='row'>
                <div className='input-group'>
                  <Image src={IconDescribeUrl} width={40} height={40} />
                  <p className='lead ms-3' style = {{marginTop: '16px', marginBottom: '16px'}}> {/* fix card 1 text */}
                  Describe the items and condition of the item you would 
                  like to sell.
                  </p>
                </div>

              </div>
            </div>
          </div>
          {/* CARD PICTURE */}
          <div className="card mt-4" style={{ 
            backgroundColor: '#B6E5FF',
            boxShadow: '5px 5px 4px rgba(28, 20, 141, 0.3)', width:'841px' 
          }}> {/* fix card size */}
            <div className='card-body'>
              <div className='row'>
                <div className='input-group'>
                  <Image src={IconPictureUrl} width={40} height={28.27} /> {/* fix IconPict size but not working */}
                  <p className='lead ms-3' style = {{marginTop: '16px', marginBottom: '16px'}}> {/* fix card 2 text */}
                  Upload the clear picture of the item.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* CARD SUBMIT */}
          <div className="card mt-4" style={{ 
            backgroundColor: '#C0ECE3',
            boxShadow: '5px 5px 4px rgba(28, 20, 141, 0.3)', width:'841px'
          }}> {/* fix card size */}
            <div className='card-body'>
              <div className='row'>
                <div className='input-group'>
                  <Image src={IconSubmitUrl} width={40} height={40} />
                  <p className='lead ms-3' style = {{marginTop: '16px', marginBottom: '16px'}}> {/* fix card 3 text */}
                  Submit to one of available stores with your estimated 
                  price or follow our DIY steps to improve your recycled items.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* CARD MONEY */}
          <div className="card mt-4 mb-4" style={{ 
            backgroundColor: '#B6E5FF',
            boxShadow: '5px 5px 4px rgba(28, 20, 141, 0.3)', width:'841px'
          }}> {/* fix card size */}
            <div className='card-body'>
              <div className='row'>
                <div className='input-group'>
                  <Image src={IconMoneyUrl} width={40} height={40} />
                  <p className='lead ms-3' style = {{marginTop: '16px', marginBottom: '16px'}}> {/* fix card 4 text */}
                  Get a better offer from the store, sell, and earn the money!
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* SECTION 3 FEATURED COLLECTIONS */}
      <div className='row mt-5 mb-4'>
        <p className={styles.header3}>Featured Collections</p>
        <p className={styles.subheader3}>
        Feel free to check out our cool stuff!
        </p>

        <div className='text-center'>
          <Image style={{ marginLeft: "0px" }} src={PicChairUrl} width={345} height={345} className={styles.PicChairUrl}/> {/* fix PicChairUrl size but not working */}
          <Image style={{ marginLeft: "0px" }} src={PicBoardUrl} width={345} height={345} className={styles.PicBoardUrl}/> {/* fix PicBoardUrl size but not working */}
          <Image style={{ marginLeft: "0px" }} src={PicPlaateUrl} width={345} height={345} className={styles.PicPlaateUrl}/> {/* fix PicPlaateUrl size but not working */}
          <Image style={{ marginRight: "0px" }} src={PicWoodUrl} width={345} height={345} className={styles.PicWoodUrl}/> {/* fix PicWoodUrl size but not working */}
          {/* <Image src={PicChairUrl} width={345} height={345} className='rounded mx-auto ms-4' />
          <Image src={PicBoardUrl} width={345} height={345} className='rounded mx-auto ms-4' />
          <Image src={PicPlaateUrl} width={345} height={345} className='rounded mx-auto ms-4' />
          <Image src={PicWoodUrl} width={345} height={345} className='rounded mx-auto ms-4' /> */}
        </div>
        
        <div className="text-center mt-4">
          <button className={styles.ViewMoreBtn}>View More</button>
          <button className={styles.GetAnOfferBtn}
          data-bs-toggle="modal"
          data-bs-target="#signup"
          >Get an offer</button>
        </div>
      </div>

      {/* SECTION 4 WEEKLY DAILY TIPS */}
      <div className='row mt-5 mb-4'>
        <p className={styles.header3}>Get weekly DIY tips!</p>
        
        <div className='text-center'> 
         
         {/* button arrow delay first until hackathon done - not working for now
          <button className={styles.DirectBtn}>
          &#x2190;
        </button> */}
         
          <Image src={PicSust} width={517} height={345} className='rounded mx-auto ms-4' />
          <Image src={PicPlastic} width={517} height={345} className='rounded mx-auto ms-4' /> 
        

        {/* button arrow delay first until hackathon done - not working for now
          <button className={styles.DirectBtn}>
          &#x2192; 
        </button> */}

        </div>
        
        <div className="text-center mt-4">
          <button className={styles.GetAnOfferBtn}>View More</button>
        </div>
      </div>

    </div>
  )
}
