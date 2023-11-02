const users=[
    {id: 0, name: 'kashyap',domain: 'mern0'},
    {id: 1, name: 'Alice1',domain: 'mern1'},
    {id: 2, name: 'Alice2',domain: 'mern2'},
    {id: 3, name: 'Alice3',domain: 'mern3'},
    ];
    const Tofind = 'kashyap';
    // find is use here
 const founduser = users.find(us => us.name === Tofind);

 if(founduser){
    console.log(`userfound: ${founduser.id} domain:${founduser.domain}`);
 }else{
    console.log("none");
 }
