import Card from './Card'
import data from '../assets/data'
import './AllCards.css'

const AllCards = () => {

    return (
        <div className='
            w-4/5 grid grid-cols-[repeat(3,1fr)] grid-rows-[repeat(auto,1fr)] gap-8 my-8 m-auto'>
            {
                data.map((data) => (
                        <Card key={data.id}{...data} />
                ))
            }
        </div >
    )
}
export default AllCards;
