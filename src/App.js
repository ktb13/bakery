import NavBar from "./NavBar";
import Title from "./Title";
import RecipeList from "./RecipeList";

function App() {
  return (
    <div>
      <NavBar/>
      <Title/>
    </div>
    
  );


  return (
    <>

      <section>
        {
          cakes.map ((cake, index) => {
            return(
              <div key={index}>
                <h3>{cake.cakeName}</h3>
                <ul>
                  {cake.ingredients.map((ingredient, index) => {
                    return(
                      <li key={index}>{ingredient}</li>
                    )



                  })}
                   
                   
                   
                </ul>
              </div>

            )


          })


        }


      </section>

      <section>

      </section>

     </>


)

export default App;
