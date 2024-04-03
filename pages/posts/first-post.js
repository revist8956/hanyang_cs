import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import Image from 'next/image';

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <h3>04/02/2024 Cherry Blossom</h3>
      <Image
        src = "/cherry_blossom.jpg"
        width = {690}
        height = {920}
       /> 

      <style jsx global>{`
    html,
    body {
      background: #E8F5FF;
    }
  `}</style>
    </>
  );
}