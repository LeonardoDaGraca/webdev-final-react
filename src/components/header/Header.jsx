import "./header.css";

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm"></span>
            <span className="headerTitleLg">Total Football</span>
        </div>
        {/* <img 
          className="headerImg" 
          src={process.env.PUBLIC_URL + '/images/header.jpeg'}
          alt="" 
        />     */}
    </div>
  );
}