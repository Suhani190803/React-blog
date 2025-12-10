function User1({user}){
    return(
        <div>
            <hr/>
            <h1>Name :{user.name}</h1>
            <h2>Age:{user.age}</h2>
            <h3>Email :{user.email}</h3>
            {/* <h3>City :{city}</h3> */}
        </div>
    )
}

export default User1;