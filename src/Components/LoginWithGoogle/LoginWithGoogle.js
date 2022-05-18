import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "./../Firebase/firebase.init";
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';

const LoginWithGoogle = () => {
    const [user]=useAuthState(auth);
    const [signInWithGoogle, error, loading] = useSignInWithGoogle(auth);
    
    const googleLogin=()=>{
        signInWithGoogle();
    }
    const logOut=()=>{
        signOut(auth);
    }
    

     
     if (loading) {
       return <p> Loading...</p>;
     }
    
    
   
    return (
      <div>
        <p>{user?.displayName}</p>

        {user ? (
          <button className="btn btn-danger" onClick={logOut}>
            SignOut
          </button>
        ) : (
          <button className="btn btn-warning" onClick={googleLogin}>
            Signin With GOOGLE
          </button>
        )}
      </div>
    );
};

export default LoginWithGoogle;