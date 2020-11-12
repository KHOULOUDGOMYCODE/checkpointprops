import React from 'react';
import './App.css';
import ProfileComponent from './profile/ProfileComponent';

const name='Amy Winehouse'
const bio='Née le 14 septembre 1983 et décédée à Londres le 23 juillet 2011, Amy Jade Winehouse était une chanteuse, auteure, compositrice et interprète britannique. Ses multiples influences musicales entre jazz, blues et soul, son timbre de voix particulier et son look des années 1950 lui confèrent le statut d’icône musicale des années 2000. Ses tatouages, sa coiffure et son coup d’eye-liner lui valent également d’être saluée par le monde de la mode. Si « Franck », le premier album de la chanteuse sorti en 2003, rencontre un succès et de bonnes critiques au Royaume-Uni, c’est l’opus « Back To Black » qui fait d’Amy Winehouse une star internationale. Sacrée Meilleure nouvelle artiste, l’artiste obtient trois autres Grammy Awards en 2006 (Album de l’année et Chanson de l’année pour le tube « Rehab ») et de nombreuses autres récompenses à travers le monde. « You know I’m No Good » et « Back To Black » figurent parmi ses grands succès. Mariée de 2007 à 2009 à Blake Fielder-Civil, un junkie, Amy est précipitée dans l’enfer de la drogue et peine à en sortir. Les médias ont largement relayé les problèmes d’addiction à l’alcool ou à la drogue de la chanteuse, ainsi que ses soucis de dépression. Amy est morte dans son appartement londonien à 27 ans, après un fort abus d’alcool après une longue période d’abstinence.'
const profession='Singer'

function App() {
  return (
    <div>
<ProfileComponent name={name} bio={bio} profession={profession}/>
    </div>
    
  
  );
}

export default App;
