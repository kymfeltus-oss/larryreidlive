export default function Pricing(){
  const tiers = [
    {key:'free', title:'Free', price:'$0/mo', perks:['Morning Prayers','Public Lives & Clips','Newsletter'], cta:'Create Account'},
    {key:'mentorship', title:'Mentorship Circle', price:'$19.99/mo', perks:['Christ Consciousness Lessons','Journal & Progress','Members-Only Community'], hot:true},
    {key:'partners', title:'Prophets & Partners', price:'$49.99/mo', perks:['Exclusive Livestreams + Q&A','Prophecy/Testimony Board','Downloadables']},
    {key:'inner', title:'Inner Circle', price:'$99.99/mo', perks:['1:1 Mentorship','Wealth & Health Intensives','Early Access Events']},
  ];
  return (
    <div className="grid">
      {tiers.map(t => (
        <div key={t.key} className="card">
          {t.hot && <div style={{background:'#C62828',color:'#fff',padding:'2px 8px',display:'inline-block',borderRadius:8,fontSize:12,fontWeight:800}}>Popular</div>}
          <h3>{t.title}</h3>
          <h2 style={{marginTop:0}}>{t.price}</h2>
          <ul>
            {t.perks.map((p,i)=>(<li key={i}>{p}</li>))}
          </ul>
          {t.key==='free' ? (
            <a href="/login" className="btn">Create Account</a>
          ) : (
            <a className="btn primary" href={`/api/checkout?plan=${t.key}`}>Join with Stripe</a>
          )}
        </div>
      ))}
    </div>
  );
}
