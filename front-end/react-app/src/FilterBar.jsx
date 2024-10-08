import Filter from "./Filter";


function FilterBar() {
    const filters = [
        {
            name: "Culture",
            options: ["Asian", "Japanese", "Middle-Eastern", "Halal", "Mexican", "African"]
        },
        {
            name: "Dietary",
            options: ["Vegetarian", "Vegan", "Hallal", "Carnivore"]
        },
        {
            name: "Distance",
            options: ["close", "far", "distant"]
        },
        {
            name: "MealType",
            options: ["Breakfast", "Medium", "Dinner"]
        },
        {
            name: "Price",
            options: ["$ (under 10)", "$$ (10 - 20)", "$$$ (20 - 50)", "$$$$ (over 50)"]
        },
        {
            name: "Rating",
            options: ["☆", "☆☆", "☆☆☆", "☆☆☆☆", "☆☆☆☆☆"]
        }
    ]

    return (
        <div className="filter-bar">
        {
            filters.map((filter, index) => {
                return <Filter name={filter.name} options={filter.options} key={filter+index} filterIndex={index}></Filter>
            })
        }
        </div>
    )
}

export default FilterBar;