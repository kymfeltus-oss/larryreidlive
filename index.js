import VideoGrid from '../components/VideoGrid';
import Link from 'next/link';

export default function Home(){
  return (
    <div>
      <div style={{position:'relative'}}>
        <img src="/banner.jpg" alt="Studio" style={{width:'100%',height:'50vh',objectFit:'cover',filter:'saturate(110%) brightness(.9)'}}/>
        <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg, transparent, rgba(10,15,24,.9))'}}/>
        <div className="container" style={{position:'absolute',inset:0,display:'flex',alignItems:'center',gap:'1.2rem'}}>
          <img src="/profile.jpg" style={{width:220,borderRadius:16,border:'3px solid #FFD700'}} alt="Larry"/>
          <div>
            <h1 style={{fontSize:36,marginBottom:6}}>More than a conversation — it’s a consciousness.</h1>
            <div style={{opacity:.85,marginBottom:12}}>Educate. Entertain. Enlighten. <b>The Larry Reid Live Experience.</b></div>
            <div style={{display:'flex',gap:8}}>
              <Link className="btn primary" href="/portal">Watch / Portal</Link>
              <Link className="btn outline" href="/pricing">Join Mentorship</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{marginTop:'2rem'}}>
        <h2>Live & Recent</h2>
        <VideoGrid/>
      </div>
    </div>
  );
}
