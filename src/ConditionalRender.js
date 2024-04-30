import React, { useState, useEffect } from 'react';

const ConditionalRender = () => {
    const [name, setName] = useState("Uday");
    const [age, setAge] = useState(36);

    useEffect(() => {
        if (age > 26) {
            console.log('you are too old');
            console.log('your age is not 26');
        } else if (name === "Nishanth" && age === 26) {
            console.log('you are Nishanth');
            console.log('your age is 26');
        } else {
            console.log('you are not a Nishanth');
            console.log('your age is not 26');
        }
    }, [name, age]); // Dependency array with name and age

    return (
        <div>
            {age > 26 ? (
                <div>
                    <p>You are too old</p>
                    <p>Your age is not 26</p>
                </div>
            ) : name === "Nishanth" && age === 26 ? (
                <div>
                    <p>You are Nishanth</p>
                    <p>Your age is 26</p>
                </div>
            ) : (
                <div>
                    <p>You are not Nishanth</p>
                    <p>Your age is not 26</p>
                </div>
            )}
        </div>
    );
};

export default ConditionalRender;








// import React from 'react'
// import { useEffect } from 'react'

// const ConditionalRender = () => {
//     useEffect(()=>{
//         let name="Nishanth"
//         let age=26

//         // if(age>26){
//         //     console.log('you are too old')
//         //     console.log('your age is not 26')
//         // }else if (name==="Nishanth" && age===26){
//         //     console.log('you are Nishanth')
//         //     console.log('your age is  26')

//         // }else{
//         //     console.log('you are not a nishanth')
//         //     console.log('your age is not a  26')
//         // }


//         age>26?(
//             <>  console.log('you are too old')
//             console.log('your age is not 26')</>  //false
//         ): (name==="Nishanth" && age===26)?(<>      
//          console.log('you are Nishanth')
//             console.log('your age is  26')
//         </>)                           
//         :(
//             <>
//              console.log('you are not a nishanth')
//             console.log('your age is not a  26')
//             </>
//         )

        

//     })
//   return (
//     <div>ConditionalRender</div>
//   )
// }

// export default ConditionalRender