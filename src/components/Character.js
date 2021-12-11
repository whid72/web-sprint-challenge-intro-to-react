// Write your Character component here
import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Character = (data) => {
    useEffect(() => {
        axios.get('https://swapi.dev/api/people/1')
          .then((res) => {
            console.log(res);
          })
        }, []
      )
    return (
      <div>
        {data.map((data, index) => {
          return (
            <section key={index}>
              <span>{data.name}</span>
              <span>{data.gender}</span>
            </section>
          );
       })}
      </div>
    );
  };
// function Character() {

//     const [data, setData] = useState([])
//     const [name, setName] = useState('');
//     const [gender, setGender] = useState('');
//     const [height, setHeight] = useState('');
//     const [mass, setMass] = useState('');
//     const [birthYear, setBirthYear] = useState('');
//     const [eyeColor, setEyeColor] = useState('');
//     const [hairColor, setHairColor] = useState('');
//     const [skinColor, setSkinColor] = useState('');

//     let len = [1, 2, 3, 4, 5, 6];

//     useEffect(() => {
//         const getData = () => {
//             axios.get('https://swapi.dev/api/people')
//                 .then((res) => {
//                     setData(res.data);
//                     // setName(res.data.name);
//                     // setGender(res.data.gender);
//                     // setHeight(res.data.height);
//                     // setMass(res.data.mass);
//                     // setBirthYear(res.data.birth_year);
//                     // setEyeColor(res.data.eye_color);
//                     // setHairColor(res.data.hair_color);
//                     // setSkinColor(res.data.skin_color);

//                 })
//         }
//         getData();
//     }, [])

//     // useEffect(() => {
//     //     len.forEach(item => {
//     //         axios.get(`https://swapi.dev/api/people/${item}`)
//     //             .then(res => {
//     //                 setName(res.data.name);
//     //                 setGender(res.data.gender);
//     //                 setHeight(res.data.height);
//     //                 setMass(res.data.mass);
//     //                 setBirthYear(res.data.birth_year);
//     //                 setEyeColor(res.data.eye_color);
//     //                 setHairColor(res.data.hair_color);
//     //                 setSkinColor(res.data.skin_color);
//     //             })
//     //     })
//     // }, [1000])

//     return (
//         <div>
//             <span>
//                 Name: {name}
//             </span>
//             <span>
//                 Gender: {gender}
//             </span>
//             <span>
//                 Height: {height}
//             </span>
//             <span>
//                 Mass: {mass}
//             </span>
//             <span>
//                 Birth-Year: {birthYear}
//             </span>
//             <span>
//                 Eye color: {eyeColor}
//             </span>
//             <span>
//                 Hair Color: {hairColor}
//             </span>
//             <span>
//                 Skin Color: {skinColor}
//             </span>
//         </div>
//     )
// }

export default Character