// pref:3

// function About(props) {
//   console.log(props); // object

//   var date = new Date().toLocaleDateString();

//   return (
//     <div className="About">
//       <img src={props.img} alt="mota Panda" />
//       <p>Date : {date} </p>
//       <h2>{props.head}</h2>
//       <p>{props.para}</p>
//     </div>
//   );
// }

// export default About;

// pref : 1

// function About({ head, para, img }) {
//   console.log(head, para, img); // object

//   var date = new Date().toLocaleDateString();

//   return (
//     <div className="About">
//       <img src={img} alt="mota Panda" />
//       <p>Date : {date} </p>
//       <h2>{head}</h2>
//       <p>{para}</p>
//     </div>
//   );
// }

// export default About;

// pref : 2

function About(props) {
  const { head, para, img } = props; //destructuring props

  console.log(head, para, img); // object

  var date = new Date().toLocaleDateString();

  return (
    <div className="About">
      <img src={img} alt="mota Panda" />
      <p>Date : {date} </p>
      <h2>{head}</h2>
      <p>{para}</p>
    </div>
  );
}

export default About;
