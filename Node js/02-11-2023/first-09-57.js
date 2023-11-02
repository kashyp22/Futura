
// ************* setInterval ***************
        // const a=setInterval(function(){
        //     // setInterval infinite ayi particular sanam time anusrich print akum
        //     console.log('kashyap');
        // },1000)

        // setTimeout(()=>{
        //     // clearinterval ann stop chyne setintervalne
        //     clearInterval(a)
        // },4000)

// *************** setTimeout ******************



//  ************** clearTimeout ****************

            const b=setTimeout(()=>{
                console.log('hai');
            },4000)

          const a=setInterval(()=>{
                console.log('ok');
                // clearTimeout((b))
                
            },1000)

            setTimeout(()=>{
                clearTimeout(a)
            },7000)
            