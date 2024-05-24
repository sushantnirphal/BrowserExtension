 import "./home.css"
 import { useBrowser } from "../../context/browser-context";

export const Home = () => {
    const {name,browserDispatch} = useBrowser()

    const handleFromSubmit =()=>{
        event.preventDefault();
    }

    const handleNameChange =(event)=>{

        if(event.key === "Enter" && event.target.value.length > 0){
            browserDispatch({
                type:"NAME",
                payload:event.target.value
            })
            localStorage.setItem("name",event.target.value)
        }
    }


  return (
    <div className="home-container d-flex direction-column align-center gap-lg">
      <h1 className="main-heading">Browser Extension</h1>
      <div className="user-details d-flex direction-column gap align-center">
        <span className="heading-1">  Hello, What's your name ?</span>
        <form action="" onSubmit={handleFromSubmit}>
        <input type="text" onKeyPress={handleNameChange} required />
        </form>
      </div>
    </div>
  );
};
