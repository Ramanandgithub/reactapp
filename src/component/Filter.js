import './Filter.css';

function Filter({ data }) {
   
    return (
        <div className="filter-buttons">
            {
                data.map((button) => {
                    return <button className='btn' key={button.id}>{button.tittle}</button>;
                })
            }
        </div>
    );
}

export default Filter;
