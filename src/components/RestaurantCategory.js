import ItemList from "./ItemList"

const RestaurantCategory=(props)=>{
    // const [showItems,setShowItems]=useState(false)

    const {title,itemCards}=props.data
    const {showItems,setShowIndex}=props

    const handleClick=()=>{
        setShowIndex()
    }

    return (
        <div>
            {/*  Header */}
            <div className="w-6/12 mx-auto my-2 bg-gray-50 shadow-lg p-4">
                <div className='flex justify-between cursor-pointer' 
                    onClick={handleClick}
                >
                    <span className="font-bold text-lg">
                        {title} ({itemCards.length})
                    </span>
                    <span>⬇️</span>
                </div>
                { showItems && <ItemList items={itemCards}/>}
            </div>
        </div>
    )
}

export default RestaurantCategory