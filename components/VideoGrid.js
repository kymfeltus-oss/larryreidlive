export default function VideoGrid(){
  const uploads = process.env.NEXT_PUBLIC_YT_CHANNEL_UPLOADS || 'UU_xxx_uploads';
  return (
    <div className="grid">
      <div className="card"><iframe style={{width:'100%',height:260}} src={`https://www.youtube.com/embed?listType=playlist&list=${uploads}`} title="YouTube uploads" allowFullScreen/></div>
      <div className="card"><iframe style={{width:'100%',height:260}} src="https://www.youtube.com/embed?listType=search&list=Larry%20Reid%20Live%20Interview" title="Search 1" allowFullScreen/></div>
      <div className="card"><iframe style={{width:'100%',height:260}} src="https://www.youtube.com/embed?listType=search&list=Larry%20Reid%20Live%20Clip" title="Search 2" allowFullScreen/></div>
    </div>
  );
}
