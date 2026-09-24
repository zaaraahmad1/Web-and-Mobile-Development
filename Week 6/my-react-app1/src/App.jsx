// import { FruitList } from './components/FruitList'

// class Car {
//   constructor(brand, model, year) {
//     this.brand = brand
//     this.model = model
//     this.year = year
//   }

//   info() {
//     return `${this.brand} ${this.model}, ${this.year}`
//   }
// }

// class Hybridcar extends Car {
//   info() {
//     return `${this.brand} ${this.model} is a hybrid car`
//   }
// }

// function App() {
//   const myCar = new Car('Toyota', 'Corolla', 2024)
//   const myHybridCarPrius = new Hybridcar('Toyota', 'Prius')
//   const myHybridCarVolt = new Hybridcar('Chevrolet', 'Volt')

//   return (
//     <div>
//       <div>
//         <h2>Fruits List</h2>
//         <FruitList />
//       </div>

//       <div>
//         <h2>Car Details</h2>
//         <p>{myCar.info()}</p>
//         <p>{myHybridCarPrius.info()}</p>
//         <p>{myHybridCarVolt.info()}</p>
//       </div>
//     </div>
//   )
// }

// export default App


function App() {

  const calculateStudyHours = (classes, hoursPerClass) => {
    return classes * hoursPerClass;
  };

  const calculateBreakTime = (studyHours) => {
    return studyHours * 0.25;
  };

  const calculateTotalTime = (studyHours, breakTime) => {
    return studyHours + breakTime;
  };

  const checkDeadline = (daysLeft) => {
    if (daysLeft <= 2) {
      return `Only ${daysLeft} days are left. I really need to finish my work!`;
    } else {
      return `I still have ${daysLeft} days, so I have some time to relax.`;
    }
  };

  const studyHours = calculateStudyHours(4, 2);
  const breakTime = calculateBreakTime(studyHours);
  const totalTime = calculateTotalTime(studyHours, breakTime);

  return (
    <>
      <h2>My University Study Story</h2>

      <p>
        I had <b>{4}</b> classes to prepare for, and I planned to study
        <b> {studyHours} </b> hours in total.
      </p>

      <p>
        After studying, I decided to take some breaks.
        My total break time was <b>{breakTime}</b> hours.
      </p>

      <p>
        So, I spent approximately <b>{totalTime}</b> hours studying and
        taking breaks.
      </p>

      <p>
        My deadline is approaching. {checkDeadline(2)}
      </p>

      <h3>
        {`If I stay focused, I can finish everything before the deadline!`}
      </h3>
    </>
  );
}

export default App;