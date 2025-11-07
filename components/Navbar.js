import Link from 'next/link';
export default function Navbar(){
  return (
    <div className="nav">
      <div className="inner container">
        <div className="brand">
          <img src="/logo.png" alt="LRL"/>
          <div>
            <b>Larry Reid Live</b><div style={{fontSize:12,opacity:.7}}>The Experience</div>
          </div>
        </div>
        <div className="links">
          <Link href="/">Home</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/portal">Portal</Link>
          <Link href="/login" className="btn outline">Login</Link>
        </div>
      </div>
    </div>
  );
}
