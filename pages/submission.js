import React, { useEffect } from 'react';

import Head from 'next/head';
import { userAccessToken } from '../utils/fetchUserDetails';

import { useRouter } from 'next/router';

export default function Submission() {

    const router = useRouter();

    useEffect(() => {

        async function fetchData() {
            const accessToken = userAccessToken();

            if (!accessToken) return router.push('/');
        }
       
    }, [])

    return (<div className='content'>
        <Head>
            <title>Submission</title>
        </Head>

        <div className='row mb-4 mt-4'>
           
        </div>

    </div>)
}