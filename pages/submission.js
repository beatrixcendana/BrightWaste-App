import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

import Head from 'next/head';
import { userAccessToken, fetchUser } from '../utils/fetchUserDetails';

import { useRouter } from 'next/router';

export default function Submission() {

    const [ user, setUser ] = useState({});
    const router = useRouter();

    const navigateTo = () => {
        // ini buah biar ngarah ke page get choices...
       router.push('/getchoices')
    }

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
                
                <form>
                    <div className='form-group row'>
                        <h1 className='text-center'>Choose Product Type</h1>
                    </div>

                    <div className='row'>
                        {/* isi radio button sama background pake image */}
                        <div className='col-sm-2 col-md-2 col-lg-2 bg-light p-4 me-2'>box 1</div>
                        <div className='col-sm-2 col-md-2 col-lg-2 bg-light p-4 me-2'>box 2</div>
                        <div className='col-sm-2 col-md-2 col-lg-2 bg-light p-4 me-2'>box 3</div>
                        <div className='col-sm-2 col-md-2 col-lg-2 bg-light p-4 me-2'>box 4</div>
                        <div className='col-sm-2 col-md-2 col-lg-2 bg-light p-4 me-2'>box 5</div>
                    </div>

                    <div className='form-group row mt-3 mb-3'>
                        <label>Name of product</label>
                        <input type='text' placeholder='Book Drawer' className='form-control border-0 bg-light'/>
                    </div>

                    <div className='form-group row mt-3 mb-3'>
                        <label>Quantity</label>
                        <input type='number' placeholder='5 pcs' className='form-control border-0 bg-light'/>
                    </div>

                    <div className='form-group row mt-3 mb-3'>
                        <label>Price offer (in USD)&#63; </label>
                        {/* text field background ubah jd ijo sesuaiin di mockup */}
                        <input type='number' placeholder='5 pcs' className='form-control border-0 bg-light'/>
                    </div>

                    {/* buat css di next js ikutin caranya di halaman getchoices.js */}
                    <div className='form-group row mt-3 mb-3'>
                        <label>Describe the Item (up to 500 words)</label>
                        <textarea cols="5" rows="5" className='form-control border-0 bg-light'></textarea>
                    </div>

                    <div className='form-group row mt-3 mb-3'>
                        <label>Upload the picture of the Item</label>
                        <div className='row'>
                            <div className='col-lg-2 col-sm-2 col-md-2 me-2'>
                                <input type="file" className='form-control'/>
                            </div>
                            <div className='col-lg-2 col-sm-2 col-md-2 me-2'>
                                <input type="file" className='form-control'/>
                            </div>
                        </div>
                    </div>

                    <div className='form-group row mt-3 mb-3'>
                        <div className='col-lg-2 col-md-2 col-sm-2 me-3'>
                            <input type="radio" />
                            Paypal logo
                        </div>
                        <div className='col-lg-2 col-md-2 col-sm-2 me-3'>
                            <input type="radio" />
                            Visa
                        </div>
                        <div className='col-lg-2 col-md-2 col-sm-2 me-3'>
                            <input type="radio" />
                            Master Card
                        </div>
                    </div>

                    <div className='form-group row mt-3 mb-3'>
                        <label>Location</label>
                        <small>We need to know location so we can find the nearest store for you</small>
                        <input type="text" placeholder="Lacey, WA, US" className="form-control border-0 bg-light"/>
                    </div>

                    <div className='form-group row mt-4 mb-3'>
                        <button onClick={ navigateTo } className="btn btn-lg text-white btn-success">Next Analyze</button>
                    </div>

                </form>
                
            </div>
        </div>

    </div>)
}