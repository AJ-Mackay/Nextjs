import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [router]);

  return (
    <div className="not-found">
      <h1>GO BACK...</h1>
      <h2>THIS IS NOT THE WAY</h2>
      <h3>Take heed and go no further</h3>
      <p>
        <Link href="/">
          <a>Beware...Beware</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
