import pic from "./pic.jpeg"
export default function Home(){
return(
<>
<center>
    <fieldset style={{width: 400 , height: 350}}>
      <img src={pic} height="300" width="300" classsName="pic"/>
      <marquee direction="right">Art <img src="https://static.vecteezy.com/system/resources/previews/009/418/837/original/paint-palette-clipart-free-png.png" height="15" width="15"/> Guitar <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/GuitareClassique5.png" height="18" width="15"/> Coding <img src="https://img.freepik.com/premium-photo/mockup-laptop-with-empty-white-screen-transparent-pattern-background_746318-193.jpg" height="15" width="15"/></marquee>
    </fieldset>

    <strong style={{ fontFamily: "Rockwell", color: "#32013d", fontSize: 30 }}>Niyati Gaonkar</strong>
      <p>Software Engineering Student</p>
      <img src="https://www.iconpacks.net/icons/1/free-mail-icon-142-thumb.png" alt="Email Icon" height="20" width="20" />&nbsp;niyatig26@gmail.com<br />
      <img src="https://w7.pngwing.com/pngs/279/613/png-transparent-mobile-phones-computer-icons-telephone-font-awesome-phone-miscellaneous-text-logo.png" alt="Phone Icon" height="20" width="20" />&nbsp;+91 ##########
    

</center>
</>
);
}