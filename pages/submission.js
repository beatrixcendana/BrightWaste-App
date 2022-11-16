import React, { useEffect, useState } from 'react';
import styles from '../styles/submission.module.css';
import Swal from 'sweetalert2';

import Head from 'next/head';
import { userAccessToken, fetchUser } from '../utils/fetchUserDetails';

import { useRouter } from 'next/router';

import { useForm } from 'react-hook-form';

// import all images
import Image from 'next/image';
import Clothing1 from '../public/images/Pict 1_Clothing.png';
import Electronics2 from '../public/images/Pict 2_Electronics.png';
import Homegarden3 from '../public/images/Pict 3_Homegarden.png';
import Automotive4 from '../public/images/Pict 4_Automotive.png';
import Others5 from '../public/images/Pict 5_Others.png';
import Paypal from '../public/images/Icon_PayPal.png';
import Visa from '../public/images/Icon_Visa.png';
import MasterCard from '../public/images/Icon_mastercard.png';
// import { useEffect, useState } from 'react';

export default function Submission() {

    const [ user, setUser ] = useState({});

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const router = useRouter();

    // const navigateTo = (e) => {
    //     e.preventDefault()
    //    router.push('/getchoices')
    // }

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

    return (<div className='content'>
        <Head>
            <title>Submission</title>
        </Head>

        <div className='row mb-4 mt-4'>
            <div className='d-flex justify-content-center align-items-center flex-wrap'>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='form-group row'>
                        <h1 className='text-center'>Choose Product Type</h1>
                    </div>

                    <div className='row'>
                        {/* isi radio button sama background pake image */}
                        <div className='col-sm-2 col-md-2 col-lg-2 bg-light p-4 me-2'>
                            <Image src={Clothing1} width={188} height={188} className= {styles.images}/>
                            <input type="radio" className="form-check-input" {...register("product_opt")} />
                        </div>
                        <div className='col-sm-2 col-md-2 col-lg-2 bg-light p-4 me-2'>
                            <Image src={Electronics2} width={188} height={188} className= {styles.images}/>
                            <input type="radio" className="form-check-input" {...register("product_opt")} />
                        </div>
                        <div className='col-sm-2 col-md-2 col-lg-2 bg-light p-4 me-2'>
                            <Image src={Homegarden3} width={188} height={188} className= {styles.images}/>
                            <input type="radio" className="form-check-input" {...register("product_opt")} />
                        </div>
                        <div className='col-sm-2 col-md-2 col-lg-2 bg-light p-4 me-2'>
                            <Image src={Automotive4} width={188} height={188} className= {styles.images}/>
                            <input type="radio" className="form-check-input" {...register("product_opt")} />
                        </div>
                        <div className='col-sm-2 col-md-2 col-lg-2 bg-light p-4 me-2'>
                            <Image src={Others5} width={188} height={188} className= {styles.images}/>
                            <input type="radio" className="form-check-input" {...register("product_opt")} />
                        </div>
                    </div>

                    <div className='form-group row mt-3 mb-3'>
                        <label>Name of product</label>
                        <input type='text' placeholder='Book Drawer' style={{ backgroundColor: '#469D8C' }} className='form-control border-0 bg-light'
                        {...register("product_name")}
                        />
                    </div>

                    <div className='form-group row mt-3 mb-3'>
                        <label>Quantity</label>
                        <input type='number' placeholder='5 pcs' className='form-control border-0 bg-light'
                        {...register("qty")}
                        />
                    </div>

                    <div className='form-group row mt-3 mb-3'>
                        <label>Price offer (in USD)&#63; </label>
                        {/* text field background ubah jd ijo sesuaiin di mockup */}
                        <input type='number' placeholder='5 pcs' style={{ backgroundColor: '#469D8C' }} className='form-control border-0 bg-light'
                        {...register("price_offer")}
                        />
                    </div>

                    <div className='form-group row mt-3 mb-3'>
                        <label>Describe the Item (up to 500 words)</label>
                        <textarea cols="5" rows="5" style={{ backgroundColor: '#469D8C' }} className='form-control border-0 bg-light'
                        {...register("description")}
                        ></textarea>
                    </div>

                    <div className='form-group row mt-3 mb-3'>
                        <label>Upload the picture of the Item</label>
                        <div className='row'>
                            <div className='col-lg-2 col-sm-2 col-md-2 me-2'>
                                <input type="file" style={{ backgroundColor: '#469D8C' }}  className='form-control' {...register("fileimg1")}/>
                            </div>
                            <div className='col-lg-2 col-sm-2 col-md-2 me-2'>
                                <input type="file" style={{ backgroundColor: '#469D8C' }} className='form-control' {...register("fileimg2")} />
                            </div>
                        </div>
                    </div>

                    <div className='form-group row mt-3 mb-3'>
                        <div className='col-lg-2 col-md-2 col-sm-2 me-3'>
                            <label className= {styles.labelpayment}>
                                <input type="radio" name="payment" className= {styles.inputRadio} {...register("payment_type")}/>
                                <Image src={Paypal} width={180} height={50} className= {styles.images} alt="Paypal"/>
                            </label>
                        </div>
                        <div className='col-lg-2 col-md-2 col-sm-2 me-3'>
                            <label className= {styles.labelpayment}>
                                <input type="radio" name="payment" className= {styles.inputRadio} {...register("payment_type")}/>
                                <Image src={Visa} width={142} height={66} className= {styles.images} alt="Visa"/>
                            </label>
                        </div>
                        <div className='col-lg-2 col-md-2 col-sm-2 me-3'>
                            <label className= {styles.labelpayment}>
                                <input type="radio" name="payment" className= {styles.inputRadio} {...register("payment_type")}/>
                                <Image src={MasterCard} width={126} height={67} className= {styles.images} alt="Master Card"/>
                            </label>
                        </div>
                    </div>

                    <div className='form-group row mt-3 mb-3'>
                        <label>Location</label>
                        <small>We need to know location so we can find the nearest store for you</small>
                        <input type="text" placeholder="Lacey, WA, US" {...register("location")} style={{ backgroundColor: '#469D8C' }} className="form-control border-0 bg-light"/>
                    </div>

                    <div className='form-group row mt-4 mb-3'>
                        <button type='submit' onClick={ (e) => handleSubmit } className="btn btn-lg text-white btn-success">Next Analyze</button>
                    </div>

                </form>
                
            </div>
        </div>

    </div>)
}