import Head from 'next/head';
import styles from '../styles/Home.module.css';

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

export default function Home() {
  return (
    <div className="content">
      <Head>
        <title>Homepage</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

      </Head>
      {/* SECTION 1 LANDING PAGE (THE TOP) */}
      
      <div className="row mb-4 mt-4">

        <div className="col-12 col-md-6 col-lg-6 col-sm-6">
          <div className='text-center'>
            <Image src={EarthImgUrl} width={400} height={400} />
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-6 col-sm-6">
          <p className={styles.head}>
            Get higher value for your used materials 
            and <span className="fw-bold">help earth to reduce
            the waste </span>and <span className="fw-bold">lead society to
            a brighter future</span> 
          </p>

          <div className='row'>
            <div className={styles.search}>
              <div className='input-group'>

                {/* TEXTFIELD INPUT ITEM NAME */}
                <Image src={SearchIconUrl} width={20} height={20}/>
                <input placeholder="What type of stuff are you looking for?" className={styles.input} />

                {/* TEXTFIELD SET LOCATION */}
                <Image src={LocationIconUrl} width={20} height={20}/>
                <input placeholder="Location" className={styles.LocationInput} />

              </div>
            </div>  

            <div className='col-3 col-md-3 col-sm-3 col-lg-3 mt-3 mb-4'>
              <button className={styles.BtnFindOut}>Find Out</button>
            </div>
          </div>

          <div className='row mt-4 mb-4'>
            <Image src={PotImgUrl} width={219} height={219} className='rounded mx-auto d-block me-3'/>
            <Image src={WasteImgUrl} width={219} height={219} className='rounded mx-auto d-block me-3'/>
            <Image src={CommunityImgUrl} width={219} height={219} className='rounded mx-auto d-block'/>
          </div>


        </div>

      </div>

      {/* SECTION 2 HOW IT WORKS */}
      <div className='row mt-5 mb-4'>
        <div className='col-6 col-lg-6 col-md-6 col-sm-6'>

          <div className='text-center mt-4 mb-4'>
            <Image src={PicGuyImgUrl} className={styles.PicGuyClass} width={413} height={413}/>
            <Image src={PicChangeImgUrl} className={styles.PicChangeClass} width={414} height={413}/>
          </div>
        
        </div>
        
        <div className='col-6 col-lg-6 col-md-6 col-sm-6'>

          <p className={styles.subhead}>How it works?</p>

          {/* CARD DESCRIBE */}
          <div className="card" style={{ 
            backgroundColor: '#C0ECE3',
            boxShadow: '5px 5px 4px rgba(28, 20, 141, 0.3)'
          }}>
            <div className='card-body'>
              <div className='row'>
                <div className='input-group'>
                  <Image src={IconDescribeUrl} width={40} height={40} />
                  <p className='lead ms-3'>
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
            boxShadow: '5px 5px 4px rgba(28, 20, 141, 0.3)'
          }}>
            <div className='card-body'>
              <div className='row'>
                <div className='input-group'>
                  <Image src={IconPictureUrl} width={40} height={40} />
                  <p className='lead ms-3'>
                  Upload the clear picture of the item.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* CARD SUBMIT */}
          <div className="card mt-4" style={{ 
            backgroundColor: '#C0ECE3',
            boxShadow: '5px 5px 4px rgba(28, 20, 141, 0.3)'
          }}>
            <div className='card-body'>
              <div className='row'>
                <div className='input-group'>
                  <Image src={IconSubmitUrl} width={40} height={40} />
                  <p className='lead ms-3'>
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
            boxShadow: '5px 5px 4px rgba(28, 20, 141, 0.3)'
          }}>
            <div className='card-body'>
              <div className='row'>
                <div className='input-group'>
                  <Image src={IconMoneyUrl} width={40} height={40} />
                  <p className='lead ms-3'>
                  Get a better offer from the store, sell, and earn the money!
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* SECTION 3 HOW IT WORKS */}
      <div className='row mt-5 mb-4'>
        <p className={styles.header3}>Featured Collections</p>
        <p className={styles.subheader3}>
        Feel free to check out our cool stuff!
        </p>

        <div className='text-center'>
          <Image src={PicChairUrl} width={345} height={345} className='rounded mx-auto ms-4' />
          <Image src={PicBoardUrl} width={345} height={345} className='rounded mx-auto ms-4' />
          <Image src={PicPlaateUrl} width={345} height={345} className='rounded mx-auto ms-4' />
          <Image src={PicWoodUrl} width={345} height={345} className='rounded mx-auto ms-4' />
        </div>
        
        <div className="text-center mt-4">
          <button className={styles.ViewMoreBtn}>View More</button>
          <button className={styles.GetAnOfferBtn}>Get an offer</button>
        </div>
      </div>

      {/* SECTION 4 WEEKLY DAILY TIPS */}
      <div className='row mt-5 mb-4'>
        <p className={styles.header3}>Get weekly DIY tips!</p>
        
        <div className='text-center'> 
         
          <button className={styles.DirectBtn}>
          &#x2190;
          </button>
         
          <Image src={PicSust} width={517} height={345} className='rounded mx-auto ms-4' />
          <Image src={PicPlastic} width={517} height={345} className='rounded mx-auto ms-4' /> 
        
          <button className={styles.DirectBtn}>
          &#x2192; 
          </button>

        </div>
        
        <div className="text-center mt-4">
          <button className={styles.GetAnOfferBtn}>View More</button>
        </div>
      </div>

    </div>
  )
}
