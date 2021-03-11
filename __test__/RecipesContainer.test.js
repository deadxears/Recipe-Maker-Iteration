import React from 'react';
import renderer from 'react-test-renderer';
import RecipesContainer from "../client/containers/RecipesContainer.jsx"
import Item from '../server/itemModels.js';
import addIngredients from "../client/components/AddIngredient.jsx"
//import { render, fireEvent, getByTestId} from "react-testing-library";
//import Item from '../server/itemModels.js';
//import Adapter from 'enzyme-adapter-react-16';
//import { configure, shallow } from 'enzyme';
//import toJson from 'enzyme-to-json'

//import RecipeDisplay from '../client/components/RecipeDisplay.jsx'
import App from '../client/App.jsx'
const [ing, setIng] = useState('')

// describe('Recipedisplay renders', ()=>{
//     mockfn=js.fn(console.log('a function'))
//     it('ingredients button', ()=>{
//         expect(onSubmit)
//     })
// })
it("renders without crashing", () => {
    shallow(<App />);
  });
  


// const url = 'https://inuyashasource.tumblr.com/'
// function fetchMock(url, suffix = "") {
//     return new Promise((resolve) =>
//       setTimeout(() => {
//         resolve({
//           json: () =>
//             Promise.resolve({
//               data: url + suffix,
//             }),
//         });
//       }, 200 + Math.random() * 300)
//     );
//   }
//   beforeEach(() => {
//     // set up a DOM element as a render target
//     container = document.createElement("div");
//     document.body.appendChild(container);
//   });
//   afterEach(() => {
//     // cleanup on exiting
//     unmountComponentAtNode(container);
//     container.remove();
//     container = null;
//   });
// describe("recipe container makes calls to api", ()=>{
//     beforeAll(() => {
//         jest.spyOn(global, "fetch").mockImplementation(fetchMock);
//       });

//       const defaultValue = { data: "yasha" };

// function TestComponent({ url }) {
//     const inventory = useInventory();
//     const inventory= ["inu","kag","shippou"]
//   const recipe = useRecipe();
//   const setRecipe = useSetRecipe();
//   if (isLoading) {
//     return <div>loading</div>;
//   }
//   return <div>{data.data}</div>;
// }
    
//     it("posts",)


// })
