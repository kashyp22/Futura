const users=[
    {id: 0, name: 'Alice0',domain: 'mern0'},
    {id: 1, name: 'Alice1',domain: 'mern1'},
    {id: 2, name: 'Alice2',domain: 'mern2'},
    {id: 3, name: 'Alice3',domain: 'mern3'},
    ];
    const Tofind = 1;
    // find is use here
 const founduser = users.find(us => us.id === Tofind);

 if(founduser){
    console.log(`userfound: ${founduser.name} domain:${founduser.domain}`);
 }else{
    console.log("none");
 }
