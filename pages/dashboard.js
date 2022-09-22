import React, { useEffect } from 'react';

import Head from 'next/head';
import { userAccessToken } from '../utils/fetchUserDetails';

import { useRouter } from 'next/router';

export default function Dashboard() {

    const router = useRouter();

    useEffect(() => {

        async function fetchData() {
            const accessToken = userAccessToken();

            if (!accessToken) return router.push('/');
        }
       
    }, [])

    return (<div className='content'>
        <Head>
            <title>Dashboard</title>
        </Head>

        <div className='row mb-4 mt-4'>
           Test...
        </div>

    </div>)
}