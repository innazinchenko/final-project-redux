import Filter from "./Filter";

const AllCategories = () => {
    return (
<div>
    <h1>What kind of food do you like?</h1>

    {['ITALIAN', 'SEAFOOD', 'APPETIZERS', 'SALADS', 'ALL'].
    map((category, id) => <Filter category={category} key={category.id} />)
    }
    
</div>
    );
}

export default AllCategories;