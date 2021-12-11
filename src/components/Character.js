// Write your Character component here
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Character() {

    const [data, setData] = useState([])
    // const [name, setName] = useState('');
    // const [gender, setGender] = useState('');
    // const [height, setHeight] = useState('');
    // const [mass, setMass] = useState('');
    // const [birthYear, setBirthYear] = useState('');
    // const [eyeColor, setEyeColor] = useState('');
    // const [hairColor, setHairColor] = useState('');
    // const [skinColor, setSkinColor] = useState('');

    // let len = [1, 2, 3, 4, 5, 6];

    useEffect(() => {
        const getData = () => {
            axios.get('https://swapi.dev/api/people')
                .then((res) => {
                    setData(res.data);
                    // setName(res.data.name);
                    // setGender(res.data.gender);
                    // setHeight(res.data.height);
                    // setMass(res.data.mass);
                    // setBirthYear(res.data.birth_year);
                    // setEyeColor(res.data.eye_color);
                    // setHairColor(res.data.hair_color);
                    // setSkinColor(res.data.skin_color);

                })
        }
        getData();
    }, [])

    return (
        <>
        {data.forEach((data, index) => {
          return (
            <div key={index}>
              <span>{data.name}</span>
              <span>{data.gender}</span>
            </div>
          );
       })}
      </>
    )
}

export default Character