import React from 'react'
import { useState } from 'react'

export default function index() {


    //Step one state 
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [inputGender, setInputGender] = useState('');
    const [data, setData ] = useState(''); 
    //Step two state 
    const [kiloGoal, setKiloGoal] = useState(''); 
    const [monthsGoal, setMonthsGoal] = useState('');
    const [budget, setBudget] = useState('');
    const [data2, setData2] = useState(''); 
    const [data3, setData3] = useState(''); 
 

   

    const stepOneHandler = async ()  => { 
        const response = await fetch("/api/requests", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ prompt: `Bereken dit BMI nauwkeurig: Gewicht: ${input1}kg, Leeftijd:  ${input2},  Lengte:  ${input3}. Stuur het BMI getal terug, niet de formule.` }),
          });

          const newBmi = await response.json();
          setData(newBmi.result); 
    }

    const stepTwoHandler = async () => {
        alert("Geduld, we maken nu je persoonlijke voedingsschema!")
        const response = await fetch("/api/requests", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ prompt: `Maak een voedingsschema  voor vandaag met deze data.  Zet calorieen achter elke maaltijd :   
                        BMI: ${data}   Gewicht: ${input1} Doel gewicht: ${kiloGoal}.  afvallen in: ${monthsGoal} maanden.  maximaal te besteden geld per maaltijd: ${budget}`
                          }),
          });

          const newBmi = await response.json();
          setData2(newBmi.result); 
    }


    const boodschappen = () => { 

    }


  return (
    <div className='flex flex-col w-[80%] p-20 gap-5 m-auto'>
      {/* Step one  */}

      <div>
         {!data && (
            <div className='flex flex-col gap-2'>
                <h1 className="font-bold text-2xl">Stap 1. BMI berekenen </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo perspiciatis culpa nostrum quos sint eum laudantium earum vel harum numquam?</p>
                <div className='form-group flex flex-col gap-3'>
                <div className='flex flex-row gap-3'>
                    <input type="radio" value="Male" name="gender"/> Man
                    <input type="radio" value="Female" name="gender" /> Vrouw
                </div>

                    <input type="number" className='py-2 px-5' min="1" max="99" placeholder='Jouw gewicht in kg' value={input1} onChange={(e) => setInput1(e.target.value)}></input>
                    <input type="number"  className='py-2 px-5'  min="1" max="99" placeholder='leeftijd' value={input2} onChange={(e) => setInput2(e.target.value)}></input>
                    <input type="number"  className='py-2 px-5' min="150" max="99" placeholder='Lengte in cm' value={input3} onChange={(e) => setInput3(e.target.value)}></input>
                    <button className="bg-[#FFA400] text-black font-bold py-2 shadow-xl " onClick={stepOneHandler}>Nu berekenen!</button>
                </div>
            </div>
         )}
         
         <br></br>

         {/* Step two */}

         {data && (
            <div>
                <div className='flex flex-col gap-4'>
                    <h1 className="font-bold text-2xl">Stap 2. Doellen stellen</h1>
                    <p className='text-sm'>Jouw BMI is <span className='font-bold text-[15px]'>{data}</span>  en je weegt: <span className='font-bold text-[15px]'>{input1}kg</span> Omschrijf nu hoeveel kilo je wilt afvallen, en hoeveel maanden dat mag duren. </p>
                        <input type="text" className='py-2 px-5' placeholder='Hoeveel kilo wil je afvallen? ' value={kiloGoal} onChange={(e) => setKiloGoal(e.target.value)} />
                        <input type="number"  className='py-2 px-5'  min="1" max="99" placeholder='Hoeveel maanden? ' value={monthsGoal} onChange={(e) => setMonthsGoal(e.target.value)}></input>
                    </div>
                    <br />
                <div className='flex flex-col gap-4'>
                    <h1 className="font-bold text-2xl">Stap 3. Budget per maaltijd instellen</h1>
                    <p className='text-sm'>Stel hier je budget in voor elke maaltijd. </p>
                        <input type="number"  className='py-2 px-5'  min="1" max="99" placeholder='Budget in euro:  ' value={budget} onChange={(e) => setBudget(e.target.value)}></input>
                        <button className='bg-[#FFA400] py-2 px-5 font-bold' onClick={stepTwoHandler}>Maak voedingsplan!</button>

                        {data2 && (
                            <div>
                                <h1 className='font-bold text-lg'>Dit is wat je vandaag moet eten om {kiloGoal} kg af te vallen in {monthsGoal} maanden tijd:</h1>
                                <div className='bg-white p-5 shadow-xl'> 
                                    <p>{data2}</p>
                                    <button className="bg-black py-3 px-2 text-white" onClick={boodschappen}>Maak boodschappenlijstje</button>
                                </div>
                            </div>
                        )}
                        
                        {data3 && (
                            <div>
                                <h1 className='font-bold text-lg'>Dit is je boodschappenlijstje: </h1>
                                <div className='bg-white p-5 shadow-xl'> 
                                    <p>{data3}</p>
                                </div>
                            </div>
                        )}
                        

                </div>
                <br />
        
            </div>
         )}



   
    


      </div>
    </div>
  )
}
