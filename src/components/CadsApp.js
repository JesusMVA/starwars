import React from 'react';
import BasicExample from './CardApp';
import img1 from '../assets/img/vader.jpg';
import img2 from '../assets/img/maul.jpg';
import img3 from '../assets/img/palpatine.jpg';
import './CSS/CardApp.css';


const Cards = [
    {
        id: 1,
        img: img1,
        title: 'Darth Vader',
        text: 'Anakin Skywalker, más tarde Darth Vader, es el personaje central de la famosa saga de Star Wars del director George Lucas. La saga se centra en su conocimiento de la Fuerza, su caída al lado Oscuro y, finalmente, su redención y muerte'
    },
    {  
        id: 2,
        img: img2,
        title: 'Darth Maul',
        text: 'Darth Maul es un personaje ficticio de la saga de ciencia ficción Star Wars. Es un personaje antagonista en la película Star Wars: Episodio I - La amenaza fantasma, en la serie animada Star Wars'
    },
    {
        id: 3,
        img: img3,
        title: 'Darth Sidious',
        text: 'Sheev Palpatine​ —también conocido como Darth Sidious o el Emperador—, es un personaje de ficción del universo de Star Wars, ​ principalmente interpretado por Ian McDiarmid.'
    }  
]

function CadsApp  () {
  return (
    <div>
      <BasicExample/>
    </div>
  )
}

export default CadsApp