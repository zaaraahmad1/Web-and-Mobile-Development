import { FruitList } from './components/FruitList'

class Car {
  constructor(brand, model, year) {
    this.brand = brand
    this.model = model
    this.year = year
  }

  info() {
    return `${this.brand} ${this.model}, ${this.year}`
  }
}

class Hybridcar extends Car {
  info() {
    return `${this.brand} ${this.model} is a hybrid car`
  }
}

function App() {
  const myCar = new Car('Toyota', 'Corolla', 2024)
  const myHybridCarPrius = new Hybridcar('Toyota', 'Prius')
  const myHybridCarVolt = new Hybridcar('Chevrolet', 'Volt')

  return (
    <div>
      <div>
        <h2>Fruits List</h2>
        <FruitList />
      </div>

      <div>
        <h2>Car Details</h2>
        <p>{myCar.info()}</p>
        <p>{myHybridCarPrius.info()}</p>
        <p>{myHybridCarVolt.info()}</p>
      </div>
    </div>
  )
}

export default App