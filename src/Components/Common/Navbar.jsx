import React, { useEffect, useState } from 'react';
import styles from '@/styles/Common/Navbar.module.css';
//import { AiOutlineSearch } from 'react-icons/ai';
//import { IoLocationOutline } from 'react-icons/io';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineCloseCircle } from 'react-icons/ai'
 
const Navbar = () => {

    const [brandOpen, setBrandOpen] = useState(false);
    const [navbarOpen, setNavbarOpen] = useState(false)
    const router = useRouter();

    // Access the current URL
    const currentURL = router.asPath;

    // Determine the current page
    const page = router.pathname;

    const brandsData = [
        {
            id: 1,
            image: '/assests/home/brands/brand1.webp',
            brand: 'Bridgestone',
        },
        {
            id: 2,
            image: '/assests/home/brands/brand2.webp',
            brand: 'Continental',
        },
        {
            id: 3,
            image: '/assests/home/brands/brand3.webp',
            brand: 'Apollo Tyres',
        },
        {
            id: 4,
            image: '/assests/home/brands/brand4.webp',
            brand: 'JK Tyres',
        },
        {
            id: 5,
            image: '/assests/home/brands/brand5.webp',
            brand: 'Yokohama',
        },
    ];

    return (
        <>
            <div className={styles.navbarWrap}>
                <div className={styles.navbarTop}>
                    <Image src='' alt='TYRES' width={1000} height={1000} className={styles.navbarLogo} />
                    <ul className={styles.navbarMenus}>
                        <Link href='/'>
                            <li style={{ color: currentURL === '/' ? 'var(--Orange)' : '#000' }}>Home</li>
                        </Link>
                        <Link href='/services'>
                            <li style={{ color: page === '/services' || page === '/services/[service]' ? 'var(--Orange)' : '#000' }}>Services</li>
                        </Link>
                        <Link href='/#contactUs'>
                            <li style={{ color: currentURL === '/#contactUs' ? 'var(--Orange)' : '#000' }}>Contact us</li>
                        </Link>
                    </ul>
                    <div className={styles.navbarIcons}>
                        {/*<span><AiOutlineSearch /></span>
                            <span><IoLocationOutline /></span>*/}
                    </div>
                    <div className={styles.phoneMenu}>
                        <span onClick={() => setNavbarOpen(true)}><BiMenuAltRight /></span>
                        <div className={styles.sliderContainer} style={{ right: navbarOpen ? '0' : '-100%' }}>
                            <div className={styles.empty} onClick={() => setNavbarOpen(false)}></div>
                            <div className={styles.slider}>
                                <p className={styles.close} onClick={() => setNavbarOpen(false)}><AiOutlineCloseCircle /></p>
                                <div className={styles.phoneOptions}>
                                    <Link href='/'>
                                        <li style={{ color: currentURL === '/' ? 'var(--Orange)' : '#000' }} onClick={() => setNavbarOpen(false)}>Home</li>
                                    </Link>
                                    <Link href='/services'>
                                        <li style={{ color: page === '/services' || page === '/services/[service]' ? 'var(--Orange)' : '#000' }} onClick={() => setNavbarOpen(false)}>Services</li>
                                    </Link>
                                    <Link href='/#contactUs'>
                                        <li style={{ color: currentURL === '/#contactUs' ? 'var(--Orange)' : '#000' }} onClick={() => setNavbarOpen(false)}>Contact us</li>
                                    </Link>
                                </div>
                                <div className={styles.brandsPhone}>
                                    <h5>Explore Brands</h5>
                                    {brandsData.map((item, id) => (
                                        <div className={styles.brandPhone} key={id} onClick={() => setNavbarOpen(false)}>
                                            <Image src={item.image} alt='Brand' width={1000} height={1000} className={styles.brandPhoneImage} />
                                            <span>{item.brand}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.navbarBottom}>
                    <div className={styles.BottomLeft}>
                        <div className={styles.brands} onClick={() => setBrandOpen(!brandOpen)}>
                            <p>Explore Brands</p>
                            <span
                                style={{ transform: brandOpen ? 'rotate(180deg)' : 'rotate(0)' }}
                            ><MdOutlineKeyboardArrowDown /></span>
                            <div className={styles.brandsContainer}
                                style={{ opacity: brandOpen ? '1' : '0', pointerEvents: brandOpen ? 'all' : 'none' }}
                            >
                                {brandsData.map((item, id) => (
                                    <div className={styles.brand} key={id}>
                                        <Image src={item.image} alt='Brand' width={1000} height={1000} className={styles.brandImage} />
                                        <span>{item.brand}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={styles.center}>
                            <p>Tyre re-tread center</p>
                        </div>
                    </div>
                    <button className={styles.navbarBtn}>Book an appointment</button>
                </div>
            </div>
            <div className={styles.spacer}></div>
        </>
    )
}

export default Navbar;