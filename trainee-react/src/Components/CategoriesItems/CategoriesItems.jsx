import React,{useState} from 'react';
import './CategoriesItems.scss';


const CategoriesItems = () => {

    const [activeIndex, setActiveIndex] = useState(0)

    const categories = [
        'Russian',
        'English',
        'Belarusia',
        'Zelandia',
        'Poland'
    ]

    const activeClickCategory = (index) => {
        setActiveIndex(index)
    }

    return (
        <div className="block">
                <ul className="categoryItems">
                    ACTIVE INDEX
                    {
                        categories.map((value, index) => <li onClick={() => activeClickCategory(index)} className={activeIndex === index ? 'active' : '' }>{value}</li>)
                    }
                </ul>
        </div>
    )
}



export default CategoriesItems;