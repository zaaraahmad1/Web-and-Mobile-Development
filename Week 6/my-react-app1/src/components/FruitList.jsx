const fruitlist = ['Apple', 'Banana', 'Cherry'];

export function FruitList() {
    return (
        <ul>
            {fruitlist.map((fruit) => (
                <li key={fruit}>{fruit}</li>
            ))}
        </ul>
    );
}