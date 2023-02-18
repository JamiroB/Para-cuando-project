import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Link href="/">HOME</Link>
      <Link href="/profile">PROFILE</Link>
      <Link href="/brands">BRANDS</Link>
      <Link href="/artists">ARTISTS</Link>
      <Link href="/tournaments">TOURNAMENTS</Link>
    </>
  );
}
