import React from 'react';
import AddTask from '../AddTask/AddTask';
import LoginWithGoogle from '../LoginWithGoogle/LoginWithGoogle';
import Tasks from './../Tasks/Tasks';


const Home = () => {
    

    return (
      <div>
        <h6>Please Login to Use</h6>
        <LoginWithGoogle></LoginWithGoogle>
        <Tasks></Tasks>

        <AddTask></AddTask>
      </div>
    );
};

export default Home;