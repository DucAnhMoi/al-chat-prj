import { useRouter } from 'next/navigation';
import React, { ReactNode } from 'react';

const Logo: React.FC = () => {
  const router = useRouter()
    return (
        <button data-state="closed">
        <a onClick={() => router.push("/")}>
          <img
            alt="logo"
            loading="lazy"
            width="200"
            height="200"
            decoding="async"
            data-nimg="1"
            className="h-12 w-fit object-contain transition-all hover:scale-110"
            style={{ color: "transparent" }}
            src="https://dev.prosights.co/_next/image?url=%2Flogo.png&w=256&q=75"
          />
        </a>
      </button>
    )
};

export default Logo;
