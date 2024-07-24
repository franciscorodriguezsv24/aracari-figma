import React from 'react'

const Facebook = () => {
    return (
        <>
            <svg
                width="3rem"
                height="3rem"
                viewBox="-7 -2 24 24"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMinYMin"
                className="jam jam-facebook"
                >
                <defs>
                    <linearGradient id="facebook-gradient" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#CEB4E9" />
                    <stop offset="100%" stopColor="#7134B1" />
                    </linearGradient>
                </defs>
                <path
                    d="M2.046 3.865v2.748H.032v3.36h2.014v9.986H6.18V9.974h2.775s.26-1.611.386-3.373H6.197V4.303c0-.343.45-.805.896-.805h2.254V0H6.283c-4.34 0-4.237 3.363-4.237 3.865z"
                    fill="url(#facebook-gradient)"
                />
            </svg>
        </>
    )
}

export default Facebook