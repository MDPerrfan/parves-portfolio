import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { motion } from 'framer-motion';

const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5 },
        },
    };

    const listItems = [
        "I'm passionate about programming, specializing in web development.",
        "I am fluent in classics like HTML, CSS, JavaScript and React.js",
        "I also possess skills in C, C++",
        "I'm working to develop my skills on Node.js and modern libraries like React.js and Next.js",
    ];

    const socialLinks = [
        {
            icon: faFacebook,
            color: '#0866ff',
            href: 'https://www.facebook.com/mdparves.erfan.3/',
        },
        {
            icon: faEnvelope,
            color: 'maroon',
            href: 'mailto:mdperrfan@gmail.com',
        },
        {
            icon: faInstagram,
            color: '#cb112d',
            href: 'https://www.instagram.com/', // Add your real link here
        },
        {
            icon: faLinkedin,
            color: '#0a66c2',
            href: 'https://www.linkedin.com/in/devparves/',
        },
    ];

    return (
        <div>
            {/* Hero Section */}
            <motion.div
                className="d-lg-flex d-md-flex justify-content-center align-items-center"
                style={{ minHeight: '100vh' }}
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <div className="container m-2">
                    <div className="row">
                        {/* Left Column */}
                        <motion.div
                            className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center"
                            variants={itemVariants}
                        >
                            {loading ? (
                                <>
                                    <Skeleton height={40} width={200} className="mb-2" />
                                    <Skeleton height={40} width={300} className="mb-2" />
                                    <Skeleton height={30} width={250} className="mb-4" />
                                </>
                            ) : (
                                <>
                                    <motion.p
                                        className="fs-3 p mt-2"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        Hi There!
                                    </motion.p>
                                    <motion.p
                                        className=" fs-1 "
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        I'm <span className="name">Mohammed Parves</span>
                                    </motion.p>
                                    <motion.div
                                        className="fs-1 "
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <Typewriter
                                            options={{
                                                strings: ['Web Developer', 'Techie', 'Teacher', 'Ecophile'],
                                                autoStart: true,
                                                loop: true,
                                            }}
                                        />
                                    </motion.div>
                                </>
                            )}
                            <motion.a
                                href="mailto:mdperrfan@gmail.com"
                                className="btn py-2 px-1 w-50 mt-3"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {loading ? <Skeleton width={100} height={30} /> : 'Send Mail'}
                            </motion.a>
                        </motion.div>

                        {/* Right Column */}
                        <motion.div
                            className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center mt-5 mt-lg-0 mt-md-0"
                            variants={imageVariants}
                        >
                            {loading ? (
                                <div className='img-fluid'>
                                <Skeleton circle={true} height={300} width={300} />

                                </div>
                            ) : (
                                <motion.img
                                    id="main-profile"
                                    className="img-fluid w-75 mt-5 mt-lg-0 mt-md-0 rounded-circle"
                                    src="https://res.cloudinary.com/ddbqfnyfc/image/upload/v1747668948/aboutprofile_q2sjqf.jpg"
                                    alt="Mohammed Parves Profile"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                />
                            )}
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* About Section */}
            <motion.div
                className="d-flex flex-column justify-content-center align-items-center"
                style={{ minHeight: '100vh'}}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="container">
                    <div className="row">
                        <motion.div
                            className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className='mb-5'>
                                LET ME <span style={{ color: 'coral' }}>INTRODUCE</span> MYSELF
                            </h1>

                            <ul className="ps-3" style={{ listStyle: 'circle', fontSize: '20px' }}>
                                {listItems.map((text, index) => (
                                    <motion.li key={index} variants={itemVariants} custom={index}>
                                        <p className="fs-5">{text}</p>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center"
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <motion.img
                                id="main-profile"
                                className="img-fluid w-50 rounded-circle"
                                src="https://res.cloudinary.com/ddbqfnyfc/image/upload/v1747669049/Profile_main_yz2dau.jpg"
                                alt="Mohammed Parves Secondary Profile"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>
                    </div>
                </div>

                {/* Social Links */}
                <motion.div
                    className="container my-4 d-flex flex-column justify-content-center align-items-center"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="p">FIND ME ON</h1>
                    <p>
                        Feel free to <span style={{ color: 'coral' }}>connect</span> with me
                    </p>
                    <ul className="list-unstyled d-flex gap-5 justify-content-center my-4">
                        {socialLinks.map((social, index) => (
                            <motion.li
                                key={index}
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <a
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Social Link"
                                    style={{ textDecoration: 'none' }}
                                >
                                    <FontAwesomeIcon icon={social.icon} size="2x" style={{ color: social.color }} />
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Home;
